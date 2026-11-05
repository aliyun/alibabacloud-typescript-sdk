import * as $dara from '@darabonba/typescript';
import { AddFirewallRulesResponseBody } from "./AddFirewallRulesResponseBody";
export declare class AddFirewallRulesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AddFirewallRulesResponseBody;
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
