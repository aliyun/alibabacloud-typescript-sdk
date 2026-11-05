import * as $dara from '@darabonba/typescript';
import { CheckAppVerifyCodeResponseBody } from "./CheckAppVerifyCodeResponseBody";
export declare class CheckAppVerifyCodeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CheckAppVerifyCodeResponseBody;
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
