import * as $dara from '@darabonba/typescript';
import { RevokeRbacUserRoleResponseBody } from "./RevokeRbacUserRoleResponseBody";
export declare class RevokeRbacUserRoleResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RevokeRbacUserRoleResponseBody;
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
