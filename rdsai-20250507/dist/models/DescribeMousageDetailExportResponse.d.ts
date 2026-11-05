import * as $dara from '@darabonba/typescript';
import { DescribeMOUsageDetailExportResponseBody } from "./DescribeMousageDetailExportResponseBody";
export declare class DescribeMOUsageDetailExportResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeMOUsageDetailExportResponseBody;
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
