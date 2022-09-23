import * as React from "react";

const SearchIcon = (props) => (
  <svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m24.123 25-9.756-9.771a7.816 7.816 0 0 1-2.648 1.565 9.002 9.002 0 0 1-3.03.534c-2.414 0-4.465-.84-6.155-2.519C.844 13.13 0 11.081 0 8.664 0 6.247.838 4.198 2.515 2.52 4.192.84 6.237 0 8.651 0s4.465.84 6.155 2.52c1.69 1.678 2.534 3.727 2.534 6.144a8.864 8.864 0 0 1-.553 3.073 8.088 8.088 0 0 1-1.581 2.652L25 24.122l-.877.878ZM8.69 16.145c2.109 0 3.887-.719 5.335-2.156 1.449-1.438 2.173-3.213 2.173-5.325s-.724-3.893-2.173-5.343c-1.448-1.45-3.226-2.176-5.335-2.176s-3.887.725-5.335 2.176C1.905 4.77 1.18 6.552 1.18 8.664s.724 3.887 2.173 5.325c1.448 1.437 3.226 2.156 5.335 2.156Z"
      fill="#D6B055"
    />
  </svg>
);

export default SearchIcon;