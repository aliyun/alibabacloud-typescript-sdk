import * as $dara from '@darabonba/typescript';
import { BindMFADeviceResponseBody } from "./BindMfadeviceResponseBody";
export declare class BindMFADeviceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: BindMFADeviceResponseBody;
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
