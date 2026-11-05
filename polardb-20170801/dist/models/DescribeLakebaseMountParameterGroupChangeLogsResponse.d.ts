import * as $dara from '@darabonba/typescript';
import { DescribeLakebaseMountParameterGroupChangeLogsResponseBody } from "./DescribeLakebaseMountParameterGroupChangeLogsResponseBody";
export declare class DescribeLakebaseMountParameterGroupChangeLogsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeLakebaseMountParameterGroupChangeLogsResponseBody;
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
