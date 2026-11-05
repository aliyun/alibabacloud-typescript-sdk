import * as $dara from '@darabonba/typescript';
import { CreateVirtualMFADeviceResponseBody } from "./CreateVirtualMfadeviceResponseBody";
export declare class CreateVirtualMFADeviceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateVirtualMFADeviceResponseBody;
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
