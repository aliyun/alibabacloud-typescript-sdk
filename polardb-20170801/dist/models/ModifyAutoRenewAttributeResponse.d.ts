import * as $dara from '@darabonba/typescript';
import { ModifyAutoRenewAttributeResponseBody } from "./ModifyAutoRenewAttributeResponseBody";
export declare class ModifyAutoRenewAttributeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyAutoRenewAttributeResponseBody;
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
