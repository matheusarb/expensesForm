import React, { useState } from "react";

const DeleteButton = () => {
  const [toDelete, isDeleted] = useState();

  return (
    <div>
      <button>Delete</button>
    </div>
  );
};

export default DeleteButton;
