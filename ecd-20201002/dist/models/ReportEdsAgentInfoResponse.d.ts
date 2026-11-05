import * as $dara from '@darabonba/typescript';
import { ReportEdsAgentInfoResponseBody } from "./ReportEdsAgentInfoResponseBody";
export declare class ReportEdsAgentInfoResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ReportEdsAgentInfoResponseBody;
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
