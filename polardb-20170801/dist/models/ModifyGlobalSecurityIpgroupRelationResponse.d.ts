import * as $dara from '@darabonba/typescript';
import { ModifyGlobalSecurityIPGroupRelationResponseBody } from "./ModifyGlobalSecurityIpgroupRelationResponseBody";
export declare class ModifyGlobalSecurityIPGroupRelationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyGlobalSecurityIPGroupRelationResponseBody;
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
