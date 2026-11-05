import * as $dara from '@darabonba/typescript';
import { GetTempDownloadUrlResponseBody } from "./GetTempDownloadUrlResponseBody";
export declare class GetTempDownloadUrlResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetTempDownloadUrlResponseBody;
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
