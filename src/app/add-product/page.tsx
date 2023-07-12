import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import FormSubmitButton from "../components/FormSubmitForm";
export const metadata = {
    title: "Add Product - E-commerce",
    description: "E-commerce online",
};

const addProduct = async (formData: FormData) => {
    "use server";
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();
    const price = Number(formData.get("price") || 0);

    if (!name || !description || !imageUrl || !price) {
        throw new Error("Missing required fields");
    }
    await prisma.product.create({
        data: { name, description, imageUrl, price },
    });
    redirect("/");
};
const AddProduct = () => {
    return (
        <div className=" h-screen flex flex-col gap-7">
            <h1 className=" mb-5 text-lg font-bold">Add Product</h1>
            <form action={addProduct} className="flex flex-col items-center">
                <input
                    required
                    name="name"
                    placeholder="Name"
                    className=" mb-5  input input-bordered w-[80%] m-auto"
                    type="text"
                />
                <textarea
                    name="description"
                    className="mb-5 textarea textarea-bordered  w-[80%]"
                    placeholder="Description"
                ></textarea>
                <input
                    required
                    name="imageUrl"
                    placeholder="Image URL"
                    className="mb-5  input input-bordered w-[80%] "
                    type="url"
                />
                <input
                    required
                    name="price"
                    placeholder="Price"
                    className="mb-5  input input-bordered w-[80%] "
                    type="number"
                />
                <FormSubmitButton className="btn-block">
                    Add Product
                </FormSubmitButton>
            </form>
        </div>
    );
};

export default AddProduct;
