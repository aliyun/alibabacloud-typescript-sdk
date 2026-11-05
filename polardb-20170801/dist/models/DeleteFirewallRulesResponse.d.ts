import * as $dara from '@darabonba/typescript';
import { DeleteFirewallRulesResponseBody } from "./DeleteFirewallRulesResponseBody";
export declare class DeleteFirewallRulesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteFirewallRulesResponseBody;
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
