import * as $dara from '@darabonba/typescript';
import { ExportMaterialFileResponseBody } from "./ExportMaterialFileResponseBody";
export declare class ExportMaterialFileResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ExportMaterialFileResponseBody;
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
