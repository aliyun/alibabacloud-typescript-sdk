import * as $dara from '@darabonba/typescript';
import { ModifyGlobalSecurityIPGroupResponseBody } from "./ModifyGlobalSecurityIpgroupResponseBody";
export declare class ModifyGlobalSecurityIPGroupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyGlobalSecurityIPGroupResponseBody;
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
