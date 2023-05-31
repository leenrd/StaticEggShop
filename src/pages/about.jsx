const About = () => {
  return (
    <div className="overflow-hidden">
        <div className="flex p-20 h-96 justify-center items-end head text-white text-shadow ">
            <h1 className="text-7xl m-0 p-0 leading-1">What are we?</h1>
            <Section img="..\..\images\pexels-alesia-kozik-6544488.jpg" p="At The Eggcellent Co., we are passionate about eggs in all their glorious forms. Whether you're a breakfast enthusiast, a baking aficionado, or simply someone who appreciates the versatility and nutritional benefits of eggs, you've come to the right place. Our website is dedicated to celebrating the egg and providing you with a delightful shopping experience." al='items-end' f='flex-row'/>
        </div>
        <div className="second w-screen">
        <Section img='..\..\images\pexels-chris-matthews-588776.jpg' p="We are a team of egg enthusiasts who have embarked on a mission to bring the finest selection of eggs to your table. From free-range to organic, from white to brown, we curate a diverse range of eggs to cater to every preference. With our extensive knowledge and experience in the egg industry, we ensure that the eggs we offer are of the highest quality, sourced from trusted local farms and producers." al='items-center' f='flex-row'/>
        <Section img="..\..\images\pexels-jenna-hamra-1305063.jpg" p="At The Eggcellent Co., we understand that eggs are more than just a breakfast staple. That's why we offer an extensive range of products to satisfy your egg cravings throughout the day. From farm-fresh whole eggs to liquid egg whites for fitness enthusiasts, we have it all. You'll also find specialty eggs like quail eggs and duck eggs, perfect for experimenting with new recipes or adding an elegant touch to your dishes." al='items-center' f='flex-row-reverse'/>
        </div>
    </div>
  )
}

export default About


const Section = ({img, p, al, f}) => {
    return(
        <section className="content m-auto">
            <div className={`m-24 flex ${f} gap-24 ${al} justify-center`}>
            <img src={img} alt="" className="w-96" />
            <p className="w-96 text-black">{p}</p>
            </div>
        </section>
    )
}