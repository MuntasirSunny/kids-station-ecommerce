import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-48 md:py-0 md:h-[820px] relative overflow-hidden bg-primary/5">
        <div className="container mx-auto">
            <div className="flex items-center justify-between">
                {/* Text */}
                <div className="w-full xl:max-w-[580px] md:h-[720px] flex flex-col justify-center items-start">
                    <h1 className="text-center xl:text-left mb-6">
                        Where <span className="text-accent">Playful</span> Delight Begins
                    </h1>
                    <p className="mb-10 text-lg max-w-[508px] mx-auto text-center xl:text-left xl:mx-0">Welcome to our enchanting world where the laughter of children mingles with the delightful melodies of play. At our Kids Station E-commerce, we believe in creating more than just a shopping experience.
                    </p>
                    {/* Button Group */}
                    <div className="flex items-center gap-4 mx-auto xl:mx-0">
                        <Link href="/our-products" className="mx-auto md:mx-0">
                            <button className="btn btn-primary">Shop now</button>
                        </Link>
                        <Link href="/our-products" className="mx-auto md:mx-0">
                            <button className="btn btn-accent">Our Products</button>
                        </Link>
                    </div>
                </div>
                {/* Image */}
                <div className="hidden xl:flex">
                    <Image 
                        src="/toy-bg.jpg"
                        width={765}
                        height={480}
                        alt="Kids Station"
                        quality={100}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero;