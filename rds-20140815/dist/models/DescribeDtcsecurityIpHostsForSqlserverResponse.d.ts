import * as $dara from '@darabonba/typescript';
import { DescribeDTCSecurityIpHostsForSQLServerResponseBody } from "./DescribeDtcsecurityIpHostsForSqlserverResponseBody";
export declare class DescribeDTCSecurityIpHostsForSQLServerResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDTCSecurityIpHostsForSQLServerResponseBody;
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
