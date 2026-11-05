import * as $dara from '@darabonba/typescript';
import { ResetUserPasswordResponseBody } from "./ResetUserPasswordResponseBody";
export declare class ResetUserPasswordResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ResetUserPasswordResponseBody;
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
