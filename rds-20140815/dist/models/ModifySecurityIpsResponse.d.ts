import * as $dara from '@darabonba/typescript';
import { ModifySecurityIpsResponseBody } from "./ModifySecurityIpsResponseBody";
export declare class ModifySecurityIpsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifySecurityIpsResponseBody;
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
