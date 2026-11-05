import * as $dara from '@darabonba/typescript';
import { GetUserMFAInfoResponseBody } from "./GetUserMfainfoResponseBody";
export declare class GetUserMFAInfoResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetUserMFAInfoResponseBody;
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
