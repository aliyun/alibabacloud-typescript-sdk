import * as $dara from '@darabonba/typescript';
import { DescribeImportTaskValidationResponseBody } from "./DescribeImportTaskValidationResponseBody";
export declare class DescribeImportTaskValidationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeImportTaskValidationResponseBody;
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
