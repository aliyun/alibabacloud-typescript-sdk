import * as $dara from '@darabonba/typescript';
import { ListClassesResponseBody } from "./ListClassesResponseBody";
export declare class ListClassesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListClassesResponseBody;
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
