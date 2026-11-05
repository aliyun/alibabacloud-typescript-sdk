import * as $dara from '@darabonba/typescript';
import { GetGovernanceItemReportResponseBody } from "./GetGovernanceItemReportResponseBody";
export declare class GetGovernanceItemReportResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetGovernanceItemReportResponseBody;
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
