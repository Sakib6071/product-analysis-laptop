import React from 'react';

const Blog = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <p className='text-5xl text-center font-bold my-5'>Blog</p>
            <div className='my-8'>
                <div className='my-8'>
                    <p className="question font-semibold text-2xl"> 1. What is context API?</p>
                    <p className="answer text-xl">Answer: Basically it's avoid the props drilling, If need a data send one component to another component and parent component level is so high then we need to use so props for sending data. But context API resolve this issue. Using context API we can send a data directly one to another component</p>
                </div>
                <div className='my-5'>
                    <p className="question font-semibold text-2xl"> 2. What is Semantic Tag?</p>
                    <p className="answer text-xl">Answer: Basically semantic tag is very useful for both developer and browser. It's help to understand the section. Suppose in the header part will cover the header tag. So developer and browser can easily understand that it is header and for that reason it's SEO friendly.</p>
                </div>
                <div className='my-5'>
                    <p className="question font-semibold text-2xl"> 3. What is the difference between Inline,Inline Block and Block Element?</p>
                    <p className="answer text-xl">Answer: Inline element take space as it's need and it's not take full line, on the other hand inline block element also take needed space,but here you can set height width of the element and block element is totally opposite of inline element. It's take whole line. This is the basic difference of inline, inline-block and block element</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;