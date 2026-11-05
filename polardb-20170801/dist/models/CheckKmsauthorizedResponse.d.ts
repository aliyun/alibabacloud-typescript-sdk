import * as $dara from '@darabonba/typescript';
import { CheckKMSAuthorizedResponseBody } from "./CheckKmsauthorizedResponseBody";
export declare class CheckKMSAuthorizedResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CheckKMSAuthorizedResponseBody;
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
