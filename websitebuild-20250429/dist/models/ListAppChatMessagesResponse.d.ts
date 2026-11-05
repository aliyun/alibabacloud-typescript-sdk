import * as $dara from '@darabonba/typescript';
import { ListAppChatMessagesResponseBody } from "./ListAppChatMessagesResponseBody";
export declare class ListAppChatMessagesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListAppChatMessagesResponseBody;
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
