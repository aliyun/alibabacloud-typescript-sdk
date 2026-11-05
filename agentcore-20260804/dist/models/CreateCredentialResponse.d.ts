import * as $dara from '@darabonba/typescript';
import { CreateCredentialResponseBody } from "./CreateCredentialResponseBody";
export declare class CreateCredentialResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateCredentialResponseBody;
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
