import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductCard, { Product } from "./components/ProductCard";


const products:Product[] = [
   {
        id:"1",
        name:"Margarita Pizza",
        price: 500,
        description:"This is very tasty pizza",
        image:"/pizza-main.png"
   },
   {
        id:"2",
        name:"Margarita Pizza",
        price: 500,
        description:"This is very tasty pizza",
        image:"/pizza-main.png"
   },
   {
        id:"3",
        name:"Margarita Pizza",
        price: 500,
        description:"This is very tasty pizza",
        image:"/pizza-main.png"
   },
   {
        id:"4",
        name:"Margarita Pizza",
        price: 500,
        description:"This is very tasty pizza",
        image:"/pizza-main.png"
   },
   {
        id:"5",
        name:"Margarita Pizza",
        price: 500,
        description:"This is very tasty pizza",
        image:"/pizza-main.png"
   },

];

const Home = () => {
  return (
    <>
      <section className="bg-white">
        <div className="container px-36 flex items-center gap-10 justify-between py-24">
          <div>
            <h1 className="text-6xl font-black font-sans leading-2 ">
              Super Delicious Pizza in <br />{" "}
              <span className="text-primary">Only 45 Minutes!</span>
            </h1>
            <p className="text-2xl mt-8 max-w-lg leading-snug">
              Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
            </p>
            <Button className="mt-8 text-lg rounded-full py-7 px-6 ">
              Get Your pizza your now
            </Button>
          </div>
          <div>
            <Image
              src={"/pizza-main.png"}
              alt="pizza-main"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container py-12 px-36">
          <Tabs defaultValue="pizza" >
            <TabsList>
              <TabsTrigger value="pizza" className="text-md">
                Pizza
                
                </TabsTrigger>
              <TabsTrigger value="beverages" className="text-md">Beverages</TabsTrigger>
            </TabsList>
            <TabsContent value="pizza">
            <div className="grid grid-cols-4 gap-6 mt-6">
            {products.map((product)=> (<ProductCard key={product.id} product={product}/>))}
            </div>
            </TabsContent>
            <TabsContent value="beverages">
            <div className="grid grid-cols-4 gap-6 mt-6">
            {products.map((product)=> (<ProductCard key={product.id} product={product}/>))}
            </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Home;
