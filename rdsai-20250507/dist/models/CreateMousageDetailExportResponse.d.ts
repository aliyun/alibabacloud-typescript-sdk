import * as $dara from '@darabonba/typescript';
import { CreateMOUsageDetailExportResponseBody } from "./CreateMousageDetailExportResponseBody";
export declare class CreateMOUsageDetailExportResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateMOUsageDetailExportResponseBody;
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
