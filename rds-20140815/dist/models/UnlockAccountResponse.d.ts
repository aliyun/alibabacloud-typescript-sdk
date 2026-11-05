import * as $dara from '@darabonba/typescript';
import { UnlockAccountResponseBody } from "./UnlockAccountResponseBody";
export declare class UnlockAccountResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UnlockAccountResponseBody;
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
