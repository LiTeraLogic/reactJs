import React, { useEffect, useState, useCallback } from "react";

const Message = ({author, text, i}) => {

    return (
             <div><span>{author}: </span>{text}</div>
    );
};

export default Message;