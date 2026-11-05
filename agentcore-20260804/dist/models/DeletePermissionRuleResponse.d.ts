import * as $dara from '@darabonba/typescript';
import { DeletePermissionRuleResponseBody } from "./DeletePermissionRuleResponseBody";
export declare class DeletePermissionRuleResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeletePermissionRuleResponseBody;
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
