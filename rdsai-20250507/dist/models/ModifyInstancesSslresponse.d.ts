import * as $dara from '@darabonba/typescript';
import { ModifyInstancesSSLResponseBody } from "./ModifyInstancesSslresponseBody";
export declare class ModifyInstancesSSLResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyInstancesSSLResponseBody;
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
