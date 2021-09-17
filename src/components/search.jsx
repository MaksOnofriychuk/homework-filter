import React from "react";
import PropTypes from "prop-types";

const Search = ({ length }) => {
    const changeLength = () => {
        return length > 0
            ? `${length} Человек тусанет с тобой сегодня`
            : "Никто с тобой не тусанет";
    };
    const changeColor = () => {
        return length === 0
            ? "btn badge bg-warning text-dark"
            : "btn badge bg-success";
    };
    return (
        <button type="button" className={changeColor()}>
            <span>{changeLength()}</span>
        </button>
    );
};
Search.propTypes = {
    length: PropTypes.number.isRequired
};
export default Search;
