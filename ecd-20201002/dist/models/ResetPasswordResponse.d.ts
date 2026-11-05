import * as $dara from '@darabonba/typescript';
import { ResetPasswordResponseBody } from "./ResetPasswordResponseBody";
export declare class ResetPasswordResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ResetPasswordResponseBody;
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
