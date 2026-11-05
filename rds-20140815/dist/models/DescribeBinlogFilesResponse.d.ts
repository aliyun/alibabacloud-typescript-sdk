import * as $dara from '@darabonba/typescript';
import { DescribeBinlogFilesResponseBody } from "./DescribeBinlogFilesResponseBody";
export declare class DescribeBinlogFilesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeBinlogFilesResponseBody;
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
