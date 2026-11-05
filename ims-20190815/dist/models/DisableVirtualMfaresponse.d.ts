import * as $dara from '@darabonba/typescript';
import { DisableVirtualMFAResponseBody } from "./DisableVirtualMfaresponseBody";
export declare class DisableVirtualMFAResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DisableVirtualMFAResponseBody;
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
