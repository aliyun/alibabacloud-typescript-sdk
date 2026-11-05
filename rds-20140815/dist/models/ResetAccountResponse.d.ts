import * as $dara from '@darabonba/typescript';
import { ResetAccountResponseBody } from "./ResetAccountResponseBody";
export declare class ResetAccountResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ResetAccountResponseBody;
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
