import * as $dara from '@darabonba/typescript';
import { ModifyGlobalSecurityIPGroupNameResponseBody } from "./ModifyGlobalSecurityIpgroupNameResponseBody";
export declare class ModifyGlobalSecurityIPGroupNameResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyGlobalSecurityIPGroupNameResponseBody;
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
