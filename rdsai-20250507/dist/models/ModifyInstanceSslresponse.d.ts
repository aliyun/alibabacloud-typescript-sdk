import * as $dara from '@darabonba/typescript';
import { ModifyInstanceSSLResponseBody } from "./ModifyInstanceSslresponseBody";
export declare class ModifyInstanceSSLResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyInstanceSSLResponseBody;
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
