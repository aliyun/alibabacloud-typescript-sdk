import * as $dara from '@darabonba/typescript';
import { GetInspectionReportResponseBody } from "./GetInspectionReportResponseBody";
export declare class GetInspectionReportResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetInspectionReportResponseBody;
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
