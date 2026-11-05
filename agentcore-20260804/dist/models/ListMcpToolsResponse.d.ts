import * as $dara from '@darabonba/typescript';
import { ListMcpToolsResponseBody } from "./ListMcpToolsResponseBody";
export declare class ListMcpToolsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListMcpToolsResponseBody;
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
