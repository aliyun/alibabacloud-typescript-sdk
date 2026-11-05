import * as $dara from '@darabonba/typescript';
import { GetAgentCodePackageUploadUrlResponseBody } from "./GetAgentCodePackageUploadUrlResponseBody";
export declare class GetAgentCodePackageUploadUrlResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAgentCodePackageUploadUrlResponseBody;
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
