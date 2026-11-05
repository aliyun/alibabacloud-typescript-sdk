import * as $dara from '@darabonba/typescript';
import { ModifyInstanceAutoRenewalAttributeResponseBody } from "./ModifyInstanceAutoRenewalAttributeResponseBody";
export declare class ModifyInstanceAutoRenewalAttributeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyInstanceAutoRenewalAttributeResponseBody;
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
