

export const getGift = async(category)=>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=EifC4yaxwFSugydu0CrqUZYadislYFjM`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map(img=>{

        return{
            id : img.id,
            titulo : img.title ,
            url : img.images.downsized_medium.url
        }

    })

    return gifs;

    }