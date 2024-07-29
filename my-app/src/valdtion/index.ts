export const productValidation = (product: { title: string, description: string, imageUrl: string, price: string, colors: string[] }) => {
    const error: {
        title: string,
        description: string,
        imageUrl: string,
        price: string,
        colors: string
    } = {
        title: "",
        description: "",
        imageUrl: "",
        price: "",
        colors: ""
    };
    const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageUrl);

    if (!product.title.trim() || product.title.length < 10 || product.title.length > 80) {
        error.title = "Product title must be between 10 and 80 characters!";
    }

    if (!product.description.trim() || product.description.length < 50 || product.description.length > 900) {
        error.description = "Product description must be between 50 and 900 characters!";
    }
    if (!product.imageUrl.trim() || !validUrl) {
        error.imageUrl = "Valid image URL is required!";
    }
    if (!product.price.trim() || isNaN(Number(product.price))) {
        error.price = "Valid price is required!";
    }
    if (!product.colors || product.colors.length === 0) {
        error.colors = "At least one color must be selected!";
    }

    return error;
};
