import * as $dara from '@darabonba/typescript';
import { CreateServiceCredentialResponseBody } from "./CreateServiceCredentialResponseBody";
export declare class CreateServiceCredentialResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateServiceCredentialResponseBody;
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
