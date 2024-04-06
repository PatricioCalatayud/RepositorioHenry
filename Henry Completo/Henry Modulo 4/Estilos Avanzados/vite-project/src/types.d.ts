export interface IProduct{
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
}


export interface ICategory{
    id: number;
    name: string;
    image: string;
}




export interface IOrder{
    id: number;
    status :"approved" | "pending" | "rejected";
    date: string;
    products: IProduct[];
}

export interface IOrderUser{
    id: number;
    name: string;
    email: string;
    adress: string;
    phone: string;
    role: "admin" | "user";
    
}

export interface IUser{
    password: string;
    name: string;
    email: string;
    adress: string;
    phone: string;
   
}