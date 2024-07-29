import { ProductName } from "../typs";

export interface IProduct{
    id?:string|undefined,
    title:string,
    description:string,
    imageUrl:string,
    price:string,
    colors:string[],
    category:{
        name:string,
        imageUrl:string
    }
}
export interface IformInput{
    id:string;
    name:ProductName;
    label:string;
    type:string
}
export interface ICategory{
id:string,
name:string,
imageUrl:string
}