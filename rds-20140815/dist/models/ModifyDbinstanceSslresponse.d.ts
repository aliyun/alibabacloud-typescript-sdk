import * as $dara from '@darabonba/typescript';
import { ModifyDBInstanceSSLResponseBody } from "./ModifyDbinstanceSslresponseBody";
export declare class ModifyDBInstanceSSLResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBInstanceSSLResponseBody;
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
