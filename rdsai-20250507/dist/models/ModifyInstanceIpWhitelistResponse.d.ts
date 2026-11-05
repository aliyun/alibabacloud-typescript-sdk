import * as $dara from '@darabonba/typescript';
import { ModifyInstanceIpWhitelistResponseBody } from "./ModifyInstanceIpWhitelistResponseBody";
export declare class ModifyInstanceIpWhitelistResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyInstanceIpWhitelistResponseBody;
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
