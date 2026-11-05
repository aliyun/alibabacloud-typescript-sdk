import * as $dara from '@darabonba/typescript';
import { RevokeAccountPrivilegeResponseBody } from "./RevokeAccountPrivilegeResponseBody";
export declare class RevokeAccountPrivilegeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RevokeAccountPrivilegeResponseBody;
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
