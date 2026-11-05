import * as $dara from '@darabonba/typescript';
import { DeleteRbacPermissionResponseBody } from "./DeleteRbacPermissionResponseBody";
export declare class DeleteRbacPermissionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteRbacPermissionResponseBody;
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
