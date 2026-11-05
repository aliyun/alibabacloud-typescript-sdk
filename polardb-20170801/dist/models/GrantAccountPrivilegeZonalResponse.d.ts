import * as $dara from '@darabonba/typescript';
import { GrantAccountPrivilegeZonalResponseBody } from "./GrantAccountPrivilegeZonalResponseBody";
export declare class GrantAccountPrivilegeZonalResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GrantAccountPrivilegeZonalResponseBody;
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
