import * as $dara from '@darabonba/typescript';
import { UploadAppSiteValidationFileResponseBody } from "./UploadAppSiteValidationFileResponseBody";
export declare class UploadAppSiteValidationFileResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UploadAppSiteValidationFileResponseBody;
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
