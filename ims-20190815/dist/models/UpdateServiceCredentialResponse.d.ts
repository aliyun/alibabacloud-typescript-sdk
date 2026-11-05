import * as $dara from '@darabonba/typescript';
import { UpdateServiceCredentialResponseBody } from "./UpdateServiceCredentialResponseBody";
export declare class UpdateServiceCredentialResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateServiceCredentialResponseBody;
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
