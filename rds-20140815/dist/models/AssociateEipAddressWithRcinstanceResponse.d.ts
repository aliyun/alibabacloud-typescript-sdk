import * as $dara from '@darabonba/typescript';
import { AssociateEipAddressWithRCInstanceResponseBody } from "./AssociateEipAddressWithRcinstanceResponseBody";
export declare class AssociateEipAddressWithRCInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AssociateEipAddressWithRCInstanceResponseBody;
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
