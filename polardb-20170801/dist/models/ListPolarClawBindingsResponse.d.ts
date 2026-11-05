import * as $dara from '@darabonba/typescript';
import { ListPolarClawBindingsResponseBody } from "./ListPolarClawBindingsResponseBody";
export declare class ListPolarClawBindingsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListPolarClawBindingsResponseBody;
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
