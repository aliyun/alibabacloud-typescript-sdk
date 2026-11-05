import * as $dara from '@darabonba/typescript';
import { BindResourceControlResponseBody } from "./BindResourceControlResponseBody";
export declare class BindResourceControlResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: BindResourceControlResponseBody;
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
