import * as $dara from '@darabonba/typescript';
import { GetCredentialReportResponseBody } from "./GetCredentialReportResponseBody";
export declare class GetCredentialReportResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetCredentialReportResponseBody;
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
