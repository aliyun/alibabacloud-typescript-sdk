import * as $dara from '@darabonba/typescript';
import { GrantOperatorPermissionResponseBody } from "./GrantOperatorPermissionResponseBody";
export declare class GrantOperatorPermissionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GrantOperatorPermissionResponseBody;
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
