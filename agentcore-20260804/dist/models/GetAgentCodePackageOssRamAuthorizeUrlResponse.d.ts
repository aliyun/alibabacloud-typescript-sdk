import * as $dara from '@darabonba/typescript';
import { GetAgentCodePackageOssRamAuthorizeUrlResponseBody } from "./GetAgentCodePackageOssRamAuthorizeUrlResponseBody";
export declare class GetAgentCodePackageOssRamAuthorizeUrlResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAgentCodePackageOssRamAuthorizeUrlResponseBody;
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
