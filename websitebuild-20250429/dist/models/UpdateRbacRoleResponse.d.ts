import * as $dara from '@darabonba/typescript';
import { UpdateRbacRoleResponseBody } from "./UpdateRbacRoleResponseBody";
export declare class UpdateRbacRoleResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateRbacRoleResponseBody;
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
