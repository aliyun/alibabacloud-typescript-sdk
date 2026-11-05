import * as $dara from '@darabonba/typescript';
import { ListAppConversationMessagesResponseBody } from "./ListAppConversationMessagesResponseBody";
export declare class ListAppConversationMessagesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListAppConversationMessagesResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
