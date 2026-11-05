import * as $dara from '@darabonba/typescript';
import { CreateAccountResponseBody } from "./CreateAccountResponseBody";
export declare class CreateAccountResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateAccountResponseBody;
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
