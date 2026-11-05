import * as $dara from '@darabonba/typescript';
import { GetConversationsResponseBody } from "./GetConversationsResponseBody";
export declare class GetConversationsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetConversationsResponseBody;
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
