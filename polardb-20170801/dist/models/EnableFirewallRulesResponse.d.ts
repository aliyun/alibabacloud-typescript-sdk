import * as $dara from '@darabonba/typescript';
import { EnableFirewallRulesResponseBody } from "./EnableFirewallRulesResponseBody";
export declare class EnableFirewallRulesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: EnableFirewallRulesResponseBody;
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
