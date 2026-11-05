import * as $dara from '@darabonba/typescript';
import { GetLakebaseTenantTokenResponseBody } from "./GetLakebaseTenantTokenResponseBody";
export declare class GetLakebaseTenantTokenResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetLakebaseTenantTokenResponseBody;
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
