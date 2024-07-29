import { Button } from "@headlessui/react";
import ProductCard from "./component/ProductCard";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Model from "./component/ui/Model";
import { category, colors, formInputsList, productList } from "./data";
import { ChangeEvent, FormEvent, useState } from 'react';
import Input from "./component/ui/Input";
import { IProduct } from "./interface";
import { productValidation } from "./valdtion";
import Errorm from "./component/Errorm";
import Ccolor from "./component/Ccolor";
import { v4 as uuid } from "uuid";
import Select from "./component/ui/Select";
import { ProductName } from "./typs";
import toast, { Toaster } from 'react-hot-toast';
import Sign from "./component/Sign";
import { MdMenu } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';



function App() {
  // State to track menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const defaultProduct = {
    title: '',
    description: '',
    imageUrl: '',
    price: '',
    colors: [],
    category: {
      name: '',
      imageUrl: ''
    }
  };

  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const [productEdit, setProductEdit] = useState<IProduct>(defaultProduct);
  const [productEditIdx, setProductEditIdx] = useState<number>(0);
  const [error, setError] = useState({ title: '', description: '', imageUrl: '', price: '', colors: '' });
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(category[0]);
  const [isBlurred, setIsBlurred] = useState(false);
  const [isOpenConfirmModel, setIsOpenConfirmModel] = useState(false);
  const [productToDelete, setProductToDelete] = useState<IProduct | null>(null);

  const closeConfirmModel = () => setIsOpenConfirmModel(false);
  const openConfirmModel = () => setIsOpenConfirmModel(true);

  const open = () => {
    setIsBlurred(true); 
    setIsOpen(true);
  };
  
  const close = () => {
    setIsBlurred(false);
    setIsOpen(false);
  };
  
  const openEdit = () => {
    setIsBlurred(true); 
    setIsOpenEdit(true);
  };
  
  const closeEdit = () => {
    setIsBlurred(false); 
    setIsOpenEdit(false);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    if (isOpenEdit) {
      setProductEdit({
        ...productEdit,
        [name]: value,
      });
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
    setError({
      ...error,
      [name]: '',
    });
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const currentProduct = isOpenEdit ? productEdit : product;
    const { title, description, price, imageUrl } = currentProduct;
    const validationError = productValidation({ title, description, price, imageUrl, colors: tempColors });

    const hasError = Object.values(validationError).some(value => value !== "");

    if (hasError) {
      setError(validationError);
      return;
    }

    if (isOpenEdit) {
      setProducts(prev => prev.map(p => p.id === productEdit.id ? { ...productEdit, colors: [...productEdit.colors, ...tempColors], category: selectedCategory } : p));
      closeEdit();
    } else {
      setProducts(prev => [{ ...product, id: uuid(), colors: tempColors, category: selectedCategory }, ...prev]);
      close();
    }
    toast('The product is built', {
      icon: '👏',
      style: {
        backgroundColor: "black",
        color: "white",
      }
    });
    resetForm();
  };

  const resetForm = () => {
    setProduct(defaultProduct);
    setProductEdit(defaultProduct);
    setError({
      title: '',
      description: '',
      imageUrl: '',
      price: '',
      colors: ''
    });
    setTempColors([]);
  };

  const onCancel = () => {
    resetForm();
    close();
    closeEdit();
  };

  const handleColorClick = (color: string) => {
    setTempColors((prev) => {
      if (prev.includes(color) || productEdit.colors.includes(color)) {
        return prev.filter(c => c !== color);
      }
      return [...prev, color];
    });

    setError((prev) => ({
      ...prev,
      colors: ''
    }));
  };

  const handleDelete = (product: IProduct) => {
    setProductToDelete(product);
    openConfirmModel();
  };

  const confirmDelete = () => {
    if (productToDelete) {
      setProducts(products.filter(p => p.id !== productToDelete.id));
    }
    closeConfirmModel();
    toast('Product has been deleted', {
      icon: '👏',
      style: {
        backgroundColor: "black",
        color: "white",
      }
    });
  };

  const renderProductList = products.map((product, idx) => (
    <ProductCard 
      key={product.id}
      product={product}
      setProductEdit={setProductEdit} 
      openEdit={openEdit} 
      idx={idx}
      setProductEditIdx={setProductEditIdx}
      handleDelete={handleDelete} // Pass the function here
    />
  ));
  
  const renderFormInputsList = formInputsList.map(input => (
    <div className="flex flex-col" key={input.id}>
      <label className="mb-[2px] text-sm font-medium text-gray-700" htmlFor={input.id}>{input.label}</label>
      <Input type="text" id={input.id} name={input.name} value={isOpenEdit ? productEdit[input.name] : product[input.name]} onChange={onChangeHandler} />
      {error[input.name] && <Errorm msg={error[input.name]} />}
    </div>
  ));
  
  const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  
    const hasError = Object.values(error).some(value => value !== "");

    if (hasError) {
      setError(error);
      return;
    }

    const updateProducts = [...products];
    updateProducts[productEditIdx] = { ...productEdit, colors: [...productEdit.colors, ...tempColors], category: selectedCategory };
    setProducts(updateProducts);
    closeEdit();
    resetForm();
  };

  const renderProductColor = colors.map(color => (
    <div key={color} className="relative inline-block m-0">
      <Ccolor
        color={color}
        onClick={() => handleColorClick(color)}
      />
    </div>
  ));

  const renderTempColors = tempColors.map(color => (
    <span key={color} className="p-2 mr-0 mb-2 text-xs rounded-md text-white" style={{ backgroundColor: color }}>
      {color}
    </span>
  ));

  const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProductEdit({
      ...productEdit,
      [name]: value,
    });
    setError({
      ...error,
      [name]: '',
    });
  };

  const renderProductEditErrorMsg = (id: string, label: string, name: ProductName) => (
    <div className="flex flex-col">
      <label className="mb-[2px] text-sm font-medium text-gray-700" htmlFor={id}>{label}</label>
      <Input type="text" id={id} name={name} value={productEdit[name]} onChange={onChangeEditHandler} />
      {error[name] && <Errorm msg={error[name]} />}
    </div>
  );

  const handleSignInClick = () => {
    console.log('Sign In button clicked');
    toast.success('You have clicked the Sign In button!', {
    icon: '✅',
    style: {
      backgroundColor: 'black',
      color: 'white',
    }
  });



    
  };

  // Function to toggle menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Router>
      <div className={`transition duration-300 ${isBlurred ? 'blur-sm' : ''}`}>
        <header className="flex items-center justify-between p-4">
          <div className="flex items-center justify-between p-2">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3 transform transition-transform duration-500 hover:scale-110 hover:rotate-12">
              <svg className="w-8 h-8 text-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v9.75a3 3 0 01-2.121 2.828l-4.55 1.818a1 1 0 01-1.322-1.07L5.5 6.5a1 1 0 011.322-1.07l4.55 1.818A3 3 0 0112 3z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-black transform transition-transform duration-500 hover:translate-x-2 hover:translate-y-2">Product</h1>
              <h2 className="text-xl font-semibold text-indigo-700 transform transition-transform duration-500 hover:translate-x-2 hover:translate-y-2">Builder</h2>
            </div>
          </div>

          {/* Menu Button */}
  <div className="relative">
    <Button className="bg-indigo-700 hover:bg-indigo-800 text-white p-2 rounded-md" onClick={toggleMenu}>
      <MdMenu className="w-6 h-6" />
    </Button>
    {/* Menu */}
    {isMenuOpen && (
      <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md w-48">
        <Link to="/" className="block px-4 py-2 text-black hover:bg-gray-200">Home</Link>
        <Link to="/sign" className="block px-4 py-2 text-indigo-700 hover:bg-gray-200">Sign In / Sign Up</Link>
      </div>
            )}
          </div>
        </header>
        <Routes>
          <Route path="/" element={
            <main className="container">
              <div className="flex items-center justify-center p-2">
                <Button className="bg-indigo-700 hover:bg-indigo-800 p-4 rounded-md text-white" onClick={open}>
                  Build Product
                </Button>
              </div>
              <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
                {renderProductList}
              </div>
              {/* Models and Forms */}
              <Model isOpen={isOpen} close={close} title="ADD A NEW PRODUCT">
                <form className="space-y-3" onSubmit={submitHandler}>
                  {renderFormInputsList}
                  <Select selected={selectedCategory} setSelected={setSelectedCategory} />
                  <div className="flex items-center my-4 space-x-1 flex-wrap">
                    {renderProductColor}
                    {error.colors && <Errorm msg={error.colors} />}
                  </div>
                  <div className="flex items-center my-4 space-x-1 flex-wrap">{renderTempColors}</div>
                  <div className="flex items-center space-x-3">
                    <Button type="submit" className="bg-indigo-700 hover:bg-indigo-800 p-2 w-full rounded-md text-white">Submit</Button>
                    <Button type="button" className="bg-gray-400 hover:bg-gray-500 p-2 w-full rounded-md text-white" onClick={onCancel}>Cancel</Button>
                  </div>
                </form>
              </Model>
              {/* Edit */}
              <Model isOpen={isOpenEdit} close={closeEdit} title="EDIT PRODUCT">
                <form className="space-y-3" onSubmit={submitEditHandler}>
                  {renderProductEditErrorMsg('title', 'Product title', 'title')}
                  {renderProductEditErrorMsg('description', 'Product description', 'description')}
                  {renderProductEditErrorMsg('imageUrl', 'Product imageUrl', 'imageUrl')}
                  {renderProductEditErrorMsg('price', 'Product price', 'price')}
                  <Select selected={productEdit.category} setSelected={(value) => setProductEdit({...productEdit, category: value})} />
                  <div className="flex items-center space-x-1 flex-wrap">{renderProductColor}</div>
                  <div className="flex items-center space-x-1 flex-wrap">
                    {productEdit.colors.map(color => (
                      <span key={color} className="p-1 mr-0 mb-1 text-xs rounded-md text-white" style={{ background: color }}>
                        {color}
                      </span>
                    ))}
                    {error.colors && <Errorm msg={error.colors} />}
                  </div>
                  <div className="flex items-center my-4 space-x-1 flex-wrap">{renderTempColors}</div>
                  <div className="flex items-center space-x-3">
                    <Button type="submit" className="bg-indigo-700 hover:bg-indigo-800 p-2 w-full rounded-md text-white">Submit</Button>
                    <Button type="button" className="bg-gray-400 hover:bg-gray-500 p-2 w-full rounded-md text-white" onClick={onCancel}>Cancel</Button>
                  </div>
                </form>
              </Model>
              <Model
                isOpen={isOpenConfirmModel}
                close={closeConfirmModel}
                title="Are you sure you want to delete this product from your store?"
                description="When you click the Yes button, the product will be permanently deleted from the system. This action cannot be undone, so please make sure you really want to remove the product before proceeding. Once deleted, all associated data will be lost, and the product will no longer be available in the inventory."
              >
                <div className="mt-6 flex items-center justify-end space-x-4">
                  <Button className="bg-red-900 hover:bg-red-700 text-white py-2 px-4 rounded-md" onClick={confirmDelete}>
                    Yes, Delete
                  </Button>
                  <Button className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md" onClick={closeConfirmModel}>
                    Cancel
                  </Button>
                </div>
              </Model>
              <Toaster/>
            </main>
          } />
          <Route path="/sign" element={<Sign />} />
        </Routes>
  {/* Footer */}
  <footer className="bg-white text-indigo-700 py-4 mt-auto">
  <div className="container mx-auto flex justify-center items-center space-x-6">
    <FaFacebookF className="w-8 h-8 transition-transform transform hover:scale-110" />
    <FaTwitter className="w-8 h-8 transition-transform transform hover:scale-110" />
    <FaInstagram className="w-8 h-8 transition-transform transform hover:scale-110" />
    <FaLinkedinIn className="w-8 h-8 transition-transform transform hover:scale-110" />
  </div>
</footer>


      </div>
      
    </Router>
    
  );
}

export default App;
