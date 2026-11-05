import * as $dara from '@darabonba/typescript';
import { QueryEdsAgentReportConfigResponseBody } from "./QueryEdsAgentReportConfigResponseBody";
export declare class QueryEdsAgentReportConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: QueryEdsAgentReportConfigResponseBody;
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
