import * as $dara from '@darabonba/typescript';
import { GetLlmProxyConfigForAdminResponseBody } from "./GetLlmProxyConfigForAdminResponseBody";
export declare class GetLlmProxyConfigForAdminResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetLlmProxyConfigForAdminResponseBody;
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
