import * as $dara from '@darabonba/typescript';
import { GrantAccountPrivilegeResponseBody } from "./GrantAccountPrivilegeResponseBody";
export declare class GrantAccountPrivilegeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GrantAccountPrivilegeResponseBody;
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
