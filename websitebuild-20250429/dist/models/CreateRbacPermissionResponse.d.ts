import * as $dara from '@darabonba/typescript';
import { CreateRbacPermissionResponseBody } from "./CreateRbacPermissionResponseBody";
export declare class CreateRbacPermissionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateRbacPermissionResponseBody;
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
