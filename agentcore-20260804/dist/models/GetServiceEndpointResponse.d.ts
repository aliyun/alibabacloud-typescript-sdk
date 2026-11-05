import * as $dara from '@darabonba/typescript';
import { GetServiceEndpointResponseBody } from "./GetServiceEndpointResponseBody";
export declare class GetServiceEndpointResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetServiceEndpointResponseBody;
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
