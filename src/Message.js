import React, { forwardRef } from 'react'
import { Card, CardContent, Typography} from '@material-ui/core';
import './Message.css';

const Message = forwardRef(({ user, message}, ref)  => {

    const isUser = (user === message.user);
    
    return (
        <div ref={ref}  className={`message ${ isUser && 'message__user'}`}>
            <p className="message__userName" >{isUser ? "" : message.user}</p>
            <Card raised="true" className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography
                     color="white"
                     variant="subtitle2"
                    >
                    {message.message}
                    </Typography>
                </CardContent>
            </Card>    
        </div>    
        )
})

export default Message
