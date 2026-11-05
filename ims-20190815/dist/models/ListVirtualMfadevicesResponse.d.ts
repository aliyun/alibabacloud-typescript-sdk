import * as $dara from '@darabonba/typescript';
import { ListVirtualMFADevicesResponseBody } from "./ListVirtualMfadevicesResponseBody";
export declare class ListVirtualMFADevicesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListVirtualMFADevicesResponseBody;
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
