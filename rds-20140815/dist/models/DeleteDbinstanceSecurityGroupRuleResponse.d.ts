import * as $dara from '@darabonba/typescript';
import { DeleteDBInstanceSecurityGroupRuleResponseBody } from "./DeleteDbinstanceSecurityGroupRuleResponseBody";
export declare class DeleteDBInstanceSecurityGroupRuleResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteDBInstanceSecurityGroupRuleResponseBody;
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
