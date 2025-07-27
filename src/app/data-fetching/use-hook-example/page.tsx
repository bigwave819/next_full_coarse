import { Suspense, use } from "react";


interface  User{
    id: number;
    firstname: string;
    lastname: string;
}

interface UsersResponse {
    users: User[];
}

function getUsers(): Promise<UsersResponse> {
    return fetch("https://dummyjson.com/users").then(res => res.json())
}

function useHookExample() {

    const usersPromise = getUsers()
    return ( 
        <div>
            <h1>use Hook Example</h1>
            <Suspense
                fallback = {
                    <div>Loading ...</div>
                }
            >
                <UsersList usersPromise={usersPromise}/>
            </Suspense>
        </div>
     );
}

function UsersList({ usersPromise } : { usersPromise : Promise<UsersResponse> }) {

    const getUsersList = use(usersPromise)

    return(
        <div>
            {
                getUsersList.users.map((user) =>
                    <div key={user.id}>
                        <p>{user.firstName} - {user.lastName}</p>
                    </div> 
                )
            }
        </div>
    )
}

export default useHookExample;