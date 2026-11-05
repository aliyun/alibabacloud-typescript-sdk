import * as $dara from '@darabonba/typescript';
import { ListMemorySessionsResponseBody } from "./ListMemorySessionsResponseBody";
export declare class ListMemorySessionsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListMemorySessionsResponseBody;
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
