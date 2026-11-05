import * as $dara from '@darabonba/typescript';
import { ListMemorySessionMessagesResponseBody } from "./ListMemorySessionMessagesResponseBody";
export declare class ListMemorySessionMessagesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListMemorySessionMessagesResponseBody;
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
