import * as $dara from '@darabonba/typescript';
import { AssignRbacUserRoleResponseBody } from "./AssignRbacUserRoleResponseBody";
export declare class AssignRbacUserRoleResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AssignRbacUserRoleResponseBody;
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
