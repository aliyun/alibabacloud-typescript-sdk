import * as $dara from '@darabonba/typescript';
import { DownloadAgentSpecViaOssResponseBody } from "./DownloadAgentSpecViaOssResponseBody";
export declare class DownloadAgentSpecViaOssResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DownloadAgentSpecViaOssResponseBody;
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
