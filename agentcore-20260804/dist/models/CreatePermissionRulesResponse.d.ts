import * as $dara from '@darabonba/typescript';
import { CreatePermissionRulesResponseBody } from "./CreatePermissionRulesResponseBody";
export declare class CreatePermissionRulesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreatePermissionRulesResponseBody;
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
