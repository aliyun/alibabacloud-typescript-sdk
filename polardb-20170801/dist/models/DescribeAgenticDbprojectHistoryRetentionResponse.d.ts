import * as $dara from '@darabonba/typescript';
import { DescribeAgenticDBProjectHistoryRetentionResponseBody } from "./DescribeAgenticDbprojectHistoryRetentionResponseBody";
export declare class DescribeAgenticDBProjectHistoryRetentionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAgenticDBProjectHistoryRetentionResponseBody;
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
