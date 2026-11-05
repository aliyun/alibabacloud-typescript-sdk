import * as $dara from '@darabonba/typescript';
import { AddPolarOSSAuthorizedAccountResponseBody } from "./AddPolarOssauthorizedAccountResponseBody";
export declare class AddPolarOSSAuthorizedAccountResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AddPolarOSSAuthorizedAccountResponseBody;
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
