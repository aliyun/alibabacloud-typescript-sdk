import * as $dara from '@darabonba/typescript';
import { RevokeAccountPrivilegeZonalResponseBody } from "./RevokeAccountPrivilegeZonalResponseBody";
export declare class RevokeAccountPrivilegeZonalResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RevokeAccountPrivilegeZonalResponseBody;
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
