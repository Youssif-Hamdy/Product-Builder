import { v4 as uuid } from "uuid";
import { ICategory, IformInput, IProduct } from "../interface";

export const productList: IProduct[] = [
    {
        id: uuid(),
        title: "22 Genes GV20: MN",
        description: "Ferrari is a luxury sports car manufacturer based in Italy. Explore the latest models, news, events, merchandise and more on the official website",
        imageUrl: "https://th.bing.com/th/id/R.bc5383953fa743d80b2943bd88449e93?rik=R7itKdmeSoT9NA&pid=ImgRaw&r=0",
        price: "500000",
        colors: ["#00008B", "#8B0000","#006400"],
        category: {
            name: "Luxury Cars",
            imageUrl: "https://th.bing.com/th/id/R.bc5383953fa743d80b2943bd88449e93?rik=R7itKdmeSoT9NA&pid=ImgRaw&r=0"
        }
    },
    {
        id: uuid(),
        title: "Nike Air Max",
        description: "A versatile shoe designed for comfort and style. Perfect for running and everyday wear.",
        imageUrl: "https://th.bing.com/th/id/OIP.KrxW3XfAxFXtx4hpr6qbggAAAA?rs=1&pid=ImgDetMain",
        price: "150",
        colors: ["#00008B", "#8B0000","#006400"],
        category: {
            name: "Shoes",
            imageUrl: "https://th.bing.com/th/id/OIP.KrxW3XfAxFXtx4hpr6qbggAAAA?rs=1&pid=ImgDetMain"
        }
    },
    {
        id: uuid(),
        title: "MacBook Pro 16\"",
        description: "Apple's latest MacBook Pro with M1 chip, 16GB RAM, and 512GB SSD. Ideal for professional work and creative projects.",
        imageUrl: "https://th.bing.com/th/id/OIP.WjrLas-wq_s8LWuQ_K5UIQAAAA?rs=1&pid=ImgDetMain",
        price: "2400",
        colors: ["#00008B", "#8B0000","#006400"],
        category: {
            name: "Laptops",
            imageUrl: "https://th.bing.com/th/id/OIP.WjrLas-wq_s8LWuQ_K5UIQAAAA?rs=1&pid=ImgDetMain"
        }
    },
    {
        id: uuid(),
        title: "Rolex Submariner",
        description: "A luxury diving watch with impeccable design and precision. Perfect for both underwater adventures and formal events.",
        imageUrl: "https://th.bing.com/th/id/OIP.2uOFBGMsDMFX1BUnmOXVkAAAAA?rs=1&pid=ImgDetMain",
        price: "8500",
        colors: ["#00008B", "#8B0000","#006400"],
        category: {
            name: "Watches",
            imageUrl: "https://th.bing.com/th/id/OIP.2uOFBGMsDMFX1BUnmOXVkAAAAA?rs=1&pid=ImgDetMain"
        }
    },
    {
        id: uuid(),
        title: "Adidas Ultraboost",
        description: "High-performance running shoes with responsive cushioning. Suitable for long-distance running and intense workouts.",
        imageUrl: "https://th.bing.com/th/id/OIP.GQ2J9esKKk43pr_yipyhzwHaE8?rs=1&pid=ImgDetMain",
        price: "180",
        colors: ["#00008B", "#8B0000","#006400"],
        category: {
            name: "Shoes",
            imageUrl: "https://th.bing.com/th/id/OIP.GQ2J9esKKk43pr_yipyhzwHaE8?rs=1&pid=ImgDetMain"
        }
    },
    {
        id: uuid(),
        title: "MacBook Pro 16\"",
        description: "Apple's latest MacBook Pro with M1 chip, 16GB RAM, and 512GB SSD. Ideal for professional work and creative projects.",
        imageUrl: "https://th.bing.com/th/id/OIP.WjrLas-wq_s8LWuQ_K5UIQAAAA?rs=1&pid=ImgDetMain",
        price: "2400",
        colors: ["#00008B", "#8B0000","#006400"],
        category: {
            name: "Laptops",
            imageUrl: "https://th.bing.com/th/id/OIP.WjrLas-wq_s8LWuQ_K5UIQAAAA?rs=1&pid=ImgDetMain"
        }
    },
    {
        id: uuid(),
        title: "Rolex Submariner",
        description: "A luxury diving watch with impeccable design and precision. Perfect for both underwater adventures and formal events.",
        imageUrl: "https://th.bing.com/th/id/OIP.2uOFBGMsDMFX1BUnmOXVkAAAAA?rs=1&pid=ImgDetMain",
        price: "8500",
        colors: ["#00008B", "#8B0000","#006400"],
        category: {
            name: "Watches",
            imageUrl: "https://th.bing.com/th/id/OIP.2uOFBGMsDMFX1BUnmOXVkAAAAA?rs=1&pid=ImgDetMain"
        }
    },

    {
        id: uuid(),
        title: "Dell XPS 13",
        description: "A powerful and compact laptop with Intel i7, 16GB RAM, and 1TB SSD. Ideal for business and travel.",
        imageUrl: "https://th.bing.com/th/id/OIP.ZM8VnxXpCAcsStMLC1R8yQHaEK?rs=1&pid=ImgDetMain",
        price: "1700",
        colors: ["#00008B", "#8B0000","#006400"],
        category: {
            name: "Laptops",
            imageUrl: "https://th.bing.com/th/id/OIP.ZM8VnxXpCAcsStMLC1R8yQHaEK?rs=1&pid=ImgDetMain"
        }
        
    }
    
];
export const formInputsList:IformInput[]=[
{
    id:"title",
    name:"title",
    label:"Product title",
    type:"text",
},
{
    id:"description",
    name:"description",
    label:"Product description",
    type:"text",
},
{
    id:"image",
    name:"imageUrl",
    label:"Product imageUrl",
    type:"text",
},
{
    id:"price",
    name:"price",
    label:"Product price",
    type:"text",
},






]


export const colors: string[] = [
    // Dark colors
    "black",        // Black
    "#00008B",      // DarkBlue
    "#8B0000",      // DarkRed
    "#006400",      // DarkGreen
    "#8B4513",      // SaddleBrown
    "#2F4F4F",      // DarkSlateGray
    "#4B0082",      // Indigo
  
    // Medium colors
    "#808080",      // Gray
    "#4682B4",      // SteelBlue
    "#D2691E",      // Chocolate
    "#32CD32",      // LimeGreen
    "#DAA520",      // GoldenRod
    "#5F9EA0",      // CadetBlue
    "#8A2BE2"       // BlueViolet
  ];
  

 export const category:ICategory[]=[

{
    id: uuid(),
    name: "Luxury Cars",
 imageUrl: "https://th.bing.com/th/id/R.bc5383953fa743d80b2943bd88449e93?rik=R7itKdmeSoT9NA&pid=ImgRaw&r=0"
},

{
    id: uuid(),
    name: "Shoes",
    imageUrl: "https://th.bing.com/th/id/OIP.KrxW3XfAxFXtx4hpr6qbggAAAA?rs=1&pid=ImgDetMain"
},
{
     id: uuid(),
     name: "Laptops",
     imageUrl: "https://th.bing.com/th/id/OIP.WjrLas-wq_s8LWuQ_K5UIQAAAA?rs=1&pid=ImgDetMain"
},
{
    id: uuid(),
    name: "Watches",
    imageUrl: "https://th.bing.com/th/id/OIP.2uOFBGMsDMFX1BUnmOXVkAAAAA?rs=1&pid=ImgDetMain"
},
{
    id: uuid(),
    name: "Laptops",
    imageUrl: "https://th.bing.com/th/id/OIP.WjrLas-wq_s8LWuQ_K5UIQAAAA?rs=1&pid=ImgDetMain"
},
{
    id: uuid(),
    name: "Laptops",
     imageUrl: "https://th.bing.com/th/id/OIP.ZM8VnxXpCAcsStMLC1R8yQHaEK?rs=1&pid=ImgDetMain"
},





 ]