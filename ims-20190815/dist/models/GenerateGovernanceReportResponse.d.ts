import * as $dara from '@darabonba/typescript';
import { GenerateGovernanceReportResponseBody } from "./GenerateGovernanceReportResponseBody";
export declare class GenerateGovernanceReportResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GenerateGovernanceReportResponseBody;
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
