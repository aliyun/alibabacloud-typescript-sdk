import * as $dara from '@darabonba/typescript';
import { DescribeCrossBackupMetaListResponseBody } from "./DescribeCrossBackupMetaListResponseBody";
export declare class DescribeCrossBackupMetaListResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeCrossBackupMetaListResponseBody;
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
