import * as $dara from '@darabonba/typescript';
import { UploadAgentSpecViaOssResponseBody } from "./UploadAgentSpecViaOssResponseBody";
export declare class UploadAgentSpecViaOssResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UploadAgentSpecViaOssResponseBody;
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
