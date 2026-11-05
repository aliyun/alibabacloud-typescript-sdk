import * as $dara from '@darabonba/typescript';
import { UploadMaterialFileForAdminResponseBody } from "./UploadMaterialFileForAdminResponseBody";
export declare class UploadMaterialFileForAdminResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UploadMaterialFileForAdminResponseBody;
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
