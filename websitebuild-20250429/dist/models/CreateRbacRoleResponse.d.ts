import * as $dara from '@darabonba/typescript';
import { CreateRbacRoleResponseBody } from "./CreateRbacRoleResponseBody";
export declare class CreateRbacRoleResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateRbacRoleResponseBody;
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
