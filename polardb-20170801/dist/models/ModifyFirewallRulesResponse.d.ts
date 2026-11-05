import * as $dara from '@darabonba/typescript';
import { ModifyFirewallRulesResponseBody } from "./ModifyFirewallRulesResponseBody";
export declare class ModifyFirewallRulesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyFirewallRulesResponseBody;
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
