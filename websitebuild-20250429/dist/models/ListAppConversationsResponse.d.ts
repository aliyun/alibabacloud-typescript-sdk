import * as $dara from '@darabonba/typescript';
import { ListAppConversationsResponseBody } from "./ListAppConversationsResponseBody";
export declare class ListAppConversationsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListAppConversationsResponseBody;
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
