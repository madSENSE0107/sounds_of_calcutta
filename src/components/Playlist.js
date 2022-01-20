
function Playlist({songs,index,setIndex,setisPlaying}) {

    // console.log({songs})
    // props.songs.songs.map(prop=>console.log(prop.songName))
    return (

            
                <div className="flex flex-col items-center">
                   
                   {songs.songs.map((song,i)=>
                    <button style={{ backgroundImage: `url('${song.imgSrc}')` }} className="bg-stone-600 hover:bg-orange-600 active:bg-orange-600 rounded-sm p-1 m-1 h-24 bg-cover bg-blend-multiply w-full md:w-4/6" onClick={()=>{
                        if(index!==i){
                            setIndex(i);
                            setisPlaying(false)
                        }
                        
                        
                        }} key={song.Src}>{song.songName}</button>)}
                </div> 
                
       
    )
}

export default Playlist
