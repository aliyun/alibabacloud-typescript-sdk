import * as $dara from '@darabonba/typescript';
import { GenerateCredentialReportResponseBody } from "./GenerateCredentialReportResponseBody";
export declare class GenerateCredentialReportResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GenerateCredentialReportResponseBody;
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
