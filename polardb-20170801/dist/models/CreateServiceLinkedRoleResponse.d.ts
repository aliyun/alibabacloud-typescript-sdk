import * as $dara from '@darabonba/typescript';
import { CreateServiceLinkedRoleResponseBody } from "./CreateServiceLinkedRoleResponseBody";
export declare class CreateServiceLinkedRoleResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateServiceLinkedRoleResponseBody;
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
