import { IProduct } from '../interface';
import { txtSlicer } from '../utils/function';
import Button from './Button';
import Ccolor from './Ccolor';
import Image from './Image';

interface IProps {
  product: IProduct;
  setProductEdit: (product: IProduct) => void;
  openEdit: () => void;
  idx: number;
  setProductEditIdx: (value: number) => void;
  handleDelete: (product: IProduct) => void;
}

const ProductCard = ({ product, setProductEdit, openEdit, idx, setProductEditIdx, handleDelete }: IProps) => {
  const { title, description, imageUrl, price, colors, category } = product;

  const renderProductColor = colors.map(color => (
    <div key={color} className="relative inline-block m-0">
      <Ccolor color={color} onClick={() => { /* Handle color click */ }} />
    </div>
  ));

  const formatPrice = (price: string) => {
    if (!price) return '';
    return parseFloat(price).toLocaleString();
  };

  const onEdit = () => {
    setProductEdit(product);
    openEdit();
    setProductEditIdx(idx);
  };

  const onDelete = () => {
    handleDelete(product);
  };

  return (
    <div className="w-full max-w-sm mx-auto md:mx-0 border rounded-md p-2 flex flex-col space-y-2 transition-transform transform hover:scale-105 hover:shadow-lg">
      <Image imgUrl={imageUrl} alt={title} className="rounded-md h-52 w-full lg:object-cover" />
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm  text-gray-600 break-words">{txtSlicer(description)}</p> 
      <div className="flex items-center my-4 space-x-1 flex-wrap">{renderProductColor}</div>
     
      
      <div className="flex items-center justify-between">
        <span className="text-lg text-indigo-600 font-semibold">${formatPrice(price)}</span>
        {category && <Image imgUrl={category.imageUrl} alt={category.name} className="w-10 h-10 rounded-full object-bottom" />}
      </div>
      <div className="flex-grow" /> 
      <div className="flex items-center justify-between space-x-2">
        <Button className="bg-indigo-700 p-2 w-full rounded-md text-white" onClick={onEdit}>Edit</Button>
        <Button className="bg-red-700 p-2 w-full rounded-md text-white" onClick={onDelete}>Delete</Button>
      </div>
    </div>
  );
};

export default ProductCard;
