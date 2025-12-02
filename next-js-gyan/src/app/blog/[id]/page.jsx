export default async function BlogDetailsPage({params}){

    const {id} = await params;


    return(
        <div>
           <h1>Blog Details Page: {id}</h1>
        </div>
    )
}