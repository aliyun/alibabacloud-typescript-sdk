import * as $dara from '@darabonba/typescript';
import { GetServiceCredentialResponseBody } from "./GetServiceCredentialResponseBody";
export declare class GetServiceCredentialResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetServiceCredentialResponseBody;
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
