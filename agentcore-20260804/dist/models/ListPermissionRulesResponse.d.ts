import * as $dara from '@darabonba/typescript';
import { ListPermissionRulesResponseBody } from "./ListPermissionRulesResponseBody";
export declare class ListPermissionRulesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListPermissionRulesResponseBody;
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
