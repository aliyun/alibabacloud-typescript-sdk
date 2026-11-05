import * as $dara from '@darabonba/typescript';
import { ModifyWhitelistIpsResponseBody } from "./ModifyWhitelistIpsResponseBody";
export declare class ModifyWhitelistIpsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyWhitelistIpsResponseBody;
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
