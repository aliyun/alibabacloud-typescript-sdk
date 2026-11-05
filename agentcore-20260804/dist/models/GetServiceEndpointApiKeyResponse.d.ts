import * as $dara from '@darabonba/typescript';
import { GetServiceEndpointApiKeyResponseBody } from "./GetServiceEndpointApiKeyResponseBody";
export declare class GetServiceEndpointApiKeyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetServiceEndpointApiKeyResponseBody;
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
