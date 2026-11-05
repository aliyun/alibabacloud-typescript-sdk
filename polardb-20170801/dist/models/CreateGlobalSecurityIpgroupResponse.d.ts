import * as $dara from '@darabonba/typescript';
import { CreateGlobalSecurityIPGroupResponseBody } from "./CreateGlobalSecurityIpgroupResponseBody";
export declare class CreateGlobalSecurityIPGroupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateGlobalSecurityIPGroupResponseBody;
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
