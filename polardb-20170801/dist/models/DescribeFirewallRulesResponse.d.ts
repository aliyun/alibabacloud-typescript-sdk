import * as $dara from '@darabonba/typescript';
import { DescribeFirewallRulesResponseBody } from "./DescribeFirewallRulesResponseBody";
export declare class DescribeFirewallRulesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeFirewallRulesResponseBody;
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
