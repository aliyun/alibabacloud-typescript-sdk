import * as $dara from '@darabonba/typescript';
import { UpdateCredentialResponseBody } from "./UpdateCredentialResponseBody";
export declare class UpdateCredentialResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateCredentialResponseBody;
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
