import * as $dara from '@darabonba/typescript';
import { ModifyDBClusterSSLResponseBody } from "./ModifyDbclusterSslresponseBody";
export declare class ModifyDBClusterSSLResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBClusterSSLResponseBody;
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
