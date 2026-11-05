import * as $dara from '@darabonba/typescript';
import { ListPasskeysResponseBody } from "./ListPasskeysResponseBody";
export declare class ListPasskeysResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListPasskeysResponseBody;
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
