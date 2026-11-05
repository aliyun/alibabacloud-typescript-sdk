import * as $dara from '@darabonba/typescript';
import { ResetAccountPasswordResponseBody } from "./ResetAccountPasswordResponseBody";
export declare class ResetAccountPasswordResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ResetAccountPasswordResponseBody;
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
