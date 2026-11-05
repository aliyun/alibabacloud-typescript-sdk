import * as $dara from '@darabonba/typescript';
import { ListAIStaffChatMessagesResponseBody } from "./ListAistaffChatMessagesResponseBody";
export declare class ListAIStaffChatMessagesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListAIStaffChatMessagesResponseBody;
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
