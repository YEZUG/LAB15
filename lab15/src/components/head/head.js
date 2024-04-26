import {Link} from "react-router-dom";
import "./head.css";
export default function  Head() {
    return(
        <div className="head">
            <Link to ="/news"> Новости </Link> &nbsp;
            <Link to ="/contacts"> Контакты </Link> &nbsp;
            <Link to ="/about"> О проекте </Link> &nbsp;

        </div>
    );
}
