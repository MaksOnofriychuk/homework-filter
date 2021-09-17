import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ onBookMark, id, status }) => {
    const blackIcon = "bi bi-bookmark-fill";
    const whiteIcon = "bi bi-bookmark";
    return status ? <td><button onClick={() => onBookMark(id)}><i className={blackIcon}></i></button></td> : <td><button onClick={() => onBookMark(id)}><i className={whiteIcon}></i></button></td>;
};
BookMark.propTypes = {
    onBookMark: PropTypes.func.isRequired,
    id: PropTypes.symbol.isRequired,
    status: PropTypes.bool.isRequired
};
export default BookMark;
