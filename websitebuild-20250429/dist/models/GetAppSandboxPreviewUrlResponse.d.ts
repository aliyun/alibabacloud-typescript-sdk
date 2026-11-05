import * as $dara from '@darabonba/typescript';
import { GetAppSandboxPreviewUrlResponseBody } from "./GetAppSandboxPreviewUrlResponseBody";
export declare class GetAppSandboxPreviewUrlResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAppSandboxPreviewUrlResponseBody;
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
