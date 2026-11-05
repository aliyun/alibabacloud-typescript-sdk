import * as $dara from '@darabonba/typescript';
import { ListMcpsResponseBody } from "./ListMcpsResponseBody";
export declare class ListMcpsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListMcpsResponseBody;
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
