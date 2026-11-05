import * as $dara from '@darabonba/typescript';
import { GetAccountMFAInfoResponseBody } from "./GetAccountMfainfoResponseBody";
export declare class GetAccountMFAInfoResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAccountMFAInfoResponseBody;
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
