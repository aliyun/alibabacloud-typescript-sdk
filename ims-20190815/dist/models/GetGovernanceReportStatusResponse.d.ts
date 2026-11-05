import * as $dara from '@darabonba/typescript';
import { GetGovernanceReportStatusResponseBody } from "./GetGovernanceReportStatusResponseBody";
export declare class GetGovernanceReportStatusResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetGovernanceReportStatusResponseBody;
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
