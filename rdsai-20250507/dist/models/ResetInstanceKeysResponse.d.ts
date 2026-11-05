import * as $dara from '@darabonba/typescript';
import { ResetInstanceKeysResponseBody } from "./ResetInstanceKeysResponseBody";
export declare class ResetInstanceKeysResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ResetInstanceKeysResponseBody;
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
