import * as $dara from '@darabonba/typescript';
import { ChatMessagesResponseBody } from "./ChatMessagesResponseBody";
export declare class ChatMessagesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    id?: string;
    event?: string;
    body?: ChatMessagesResponseBody;
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
