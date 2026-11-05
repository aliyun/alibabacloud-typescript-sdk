import * as $dara from '@darabonba/typescript';
import { UnbindVerificationResponseBody } from "./UnbindVerificationResponseBody";
export declare class UnbindVerificationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UnbindVerificationResponseBody;
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
