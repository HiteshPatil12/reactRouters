import { useParams } from "react-router-dom"
export const UsersDetails = () =>{
    const params = useParams()
    const id = params.userid
    return(
    <div>
        <h1>User ID - {id}</h1>
    </div>
    )
}