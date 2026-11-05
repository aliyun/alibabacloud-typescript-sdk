import * as $dara from '@darabonba/typescript';
import { UnbindMFADeviceResponseBody } from "./UnbindMfadeviceResponseBody";
export declare class UnbindMFADeviceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UnbindMFADeviceResponseBody;
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
