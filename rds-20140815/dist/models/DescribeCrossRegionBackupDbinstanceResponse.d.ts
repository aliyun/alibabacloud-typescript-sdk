import * as $dara from '@darabonba/typescript';
import { DescribeCrossRegionBackupDBInstanceResponseBody } from "./DescribeCrossRegionBackupDbinstanceResponseBody";
export declare class DescribeCrossRegionBackupDBInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeCrossRegionBackupDBInstanceResponseBody;
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
