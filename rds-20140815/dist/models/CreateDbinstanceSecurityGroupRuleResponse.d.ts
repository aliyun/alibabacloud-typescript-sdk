import * as $dara from '@darabonba/typescript';
import { CreateDBInstanceSecurityGroupRuleResponseBody } from "./CreateDbinstanceSecurityGroupRuleResponseBody";
export declare class CreateDBInstanceSecurityGroupRuleResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateDBInstanceSecurityGroupRuleResponseBody;
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
