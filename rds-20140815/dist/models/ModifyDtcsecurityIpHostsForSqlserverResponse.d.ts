import * as $dara from '@darabonba/typescript';
import { ModifyDTCSecurityIpHostsForSQLServerResponseBody } from "./ModifyDtcsecurityIpHostsForSqlserverResponseBody";
export declare class ModifyDTCSecurityIpHostsForSQLServerResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDTCSecurityIpHostsForSQLServerResponseBody;
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
