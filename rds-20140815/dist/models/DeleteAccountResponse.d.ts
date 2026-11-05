import * as $dara from '@darabonba/typescript';
import { DeleteAccountResponseBody } from "./DeleteAccountResponseBody";
export declare class DeleteAccountResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteAccountResponseBody;
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
