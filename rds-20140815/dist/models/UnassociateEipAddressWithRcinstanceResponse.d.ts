import * as $dara from '@darabonba/typescript';
import { UnassociateEipAddressWithRCInstanceResponseBody } from "./UnassociateEipAddressWithRcinstanceResponseBody";
export declare class UnassociateEipAddressWithRCInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UnassociateEipAddressWithRCInstanceResponseBody;
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
