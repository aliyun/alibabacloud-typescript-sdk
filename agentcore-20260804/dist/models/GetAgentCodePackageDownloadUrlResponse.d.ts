import * as $dara from '@darabonba/typescript';
import { GetAgentCodePackageDownloadUrlResponseBody } from "./GetAgentCodePackageDownloadUrlResponseBody";
export declare class GetAgentCodePackageDownloadUrlResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAgentCodePackageDownloadUrlResponseBody;
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
