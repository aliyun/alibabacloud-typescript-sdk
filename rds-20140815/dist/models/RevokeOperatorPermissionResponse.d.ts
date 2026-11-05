import * as $dara from '@darabonba/typescript';
import { RevokeOperatorPermissionResponseBody } from "./RevokeOperatorPermissionResponseBody";
export declare class RevokeOperatorPermissionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RevokeOperatorPermissionResponseBody;
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
