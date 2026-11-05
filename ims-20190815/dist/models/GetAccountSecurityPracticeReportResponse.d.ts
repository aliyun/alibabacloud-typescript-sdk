import * as $dara from '@darabonba/typescript';
import { GetAccountSecurityPracticeReportResponseBody } from "./GetAccountSecurityPracticeReportResponseBody";
export declare class GetAccountSecurityPracticeReportResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAccountSecurityPracticeReportResponseBody;
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
