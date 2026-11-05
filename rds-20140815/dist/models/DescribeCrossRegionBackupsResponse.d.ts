import * as $dara from '@darabonba/typescript';
import { DescribeCrossRegionBackupsResponseBody } from "./DescribeCrossRegionBackupsResponseBody";
export declare class DescribeCrossRegionBackupsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeCrossRegionBackupsResponseBody;
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
