import { toys } from '@/lib/demo';
import Link from 'next/link';
import PopularToysCarousel from './PopularToysCarousel';

const PopularToys = () => {
  return (
    <section className="py-24">
        <div className="container mx-auto">
            <h2 className="text-center">Most Popular Toys</h2>
            <p className="text-center mb-[30px]">The World's Premium Brands In one Destination.</p>
            <PopularToysCarousel toys={toys}/>
            <Link href="/our-toys">
                <button className="btn btn-accent mx-auto">See all toys</button>
            </Link>
        </div>
    </section>
  )
}

export default PopularToys