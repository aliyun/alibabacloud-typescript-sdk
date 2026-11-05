import * as $dara from '@darabonba/typescript';
import { ResetInstancePasswordResponseBody } from "./ResetInstancePasswordResponseBody";
export declare class ResetInstancePasswordResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ResetInstancePasswordResponseBody;
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
