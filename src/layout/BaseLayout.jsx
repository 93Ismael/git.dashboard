import { Sidebar } from "../components"
import { Outlet } from "react-router-dom"

const BaseLayout = () => {
    return (
        <main className="page-wrapper">
            { /*  à gauche de la page  */ }
           <Sidebar />
           { /* côté droit / contenu de la page */ }
            <div className="content-wrapper">
                <Outlet />

            </div>
            
        </main>
    );
};

export default BaseLayout