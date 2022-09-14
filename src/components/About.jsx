import aboutImage from "../assets/images/soup.jpg";

export const About = () => {

    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                        At our resturant, we serve the best african dishes. We are 
                        blend of our culture indeginous dishes. we tend to deliver the best tasty
                        dishes in the country. We have great customer experience and servives. 
                        We also delivery 24/7. Thank you for trusting Us with your stomach. </p>
                    </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}