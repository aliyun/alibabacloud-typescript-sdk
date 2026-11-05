import * as $dara from '@darabonba/typescript';
import { ResetApplicationAccountPasswordResponseBody } from "./ResetApplicationAccountPasswordResponseBody";
export declare class ResetApplicationAccountPasswordResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ResetApplicationAccountPasswordResponseBody;
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
