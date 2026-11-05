import * as $dara from '@darabonba/typescript';
import { ListOrdersResponseBody } from "./ListOrdersResponseBody";
export declare class ListOrdersResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListOrdersResponseBody;
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
