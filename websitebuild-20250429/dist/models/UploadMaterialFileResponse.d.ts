import * as $dara from '@darabonba/typescript';
import { UploadMaterialFileResponseBody } from "./UploadMaterialFileResponseBody";
export declare class UploadMaterialFileResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UploadMaterialFileResponseBody;
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
