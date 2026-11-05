import * as $dara from '@darabonba/typescript';
import { DeleteServiceCredentialResponseBody } from "./DeleteServiceCredentialResponseBody";
export declare class DeleteServiceCredentialResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteServiceCredentialResponseBody;
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
