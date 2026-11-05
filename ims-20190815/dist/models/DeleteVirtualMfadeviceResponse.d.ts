import * as $dara from '@darabonba/typescript';
import { DeleteVirtualMFADeviceResponseBody } from "./DeleteVirtualMfadeviceResponseBody";
export declare class DeleteVirtualMFADeviceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteVirtualMFADeviceResponseBody;
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
