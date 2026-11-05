import * as $dara from '@darabonba/typescript';
import { DescribeCrossRegionLogBackupFilesResponseBody } from "./DescribeCrossRegionLogBackupFilesResponseBody";
export declare class DescribeCrossRegionLogBackupFilesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeCrossRegionLogBackupFilesResponseBody;
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
