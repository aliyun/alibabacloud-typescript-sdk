import * as $dara from '@darabonba/typescript';
import { CreateOrGetVirtualLicenseOrderResponseBody } from "./CreateOrGetVirtualLicenseOrderResponseBody";
export declare class CreateOrGetVirtualLicenseOrderResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateOrGetVirtualLicenseOrderResponseBody;
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
