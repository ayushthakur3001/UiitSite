import suggest from '../images/suggest.png'
function Suggest() {
    return (
        <div>
            <div class="announce xl:flex-col xl:flex xl:justify-center
             xl:items-center xl:w-5/12 xl:h-3/6 xl:top-96 xl:left-80
             w-10/12 h-3/6 left-7 mt-52 items-center flex-col flex absolute">
            {/* sImg */}
            <img className="absolute 
            top-8 w-20 h-20 "  src={suggest} alt=""/>
            
            
            <p className="xl:text-white  absolute
               xl:text-center xl:mb-9 xl:top-1 xl:font-extrabold
                 xl:underline xl:text-3xl
             text-white text-3xl top-2 items-center
              flex flex-col font-extrabold">Suggestion Box</p>
            
        
            <textarea placeholder="Please suggest some features"
             className="xl:w-6/12 xl:h-3/6 rounded-md
             w-8/12 h-3/6 top-24 absolute"
              name="" id="" cols="30" rows="10"></textarea>
           <button className="bg-green-400 w-3/12 border-2 rounded-lg absolute
           bottom-4">Submit</button>

        </div>
        </div>
    )
}

export default Suggest
