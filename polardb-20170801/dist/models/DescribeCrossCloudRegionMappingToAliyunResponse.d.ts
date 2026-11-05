import * as $dara from '@darabonba/typescript';
import { DescribeCrossCloudRegionMappingToAliyunResponseBody } from "./DescribeCrossCloudRegionMappingToAliyunResponseBody";
export declare class DescribeCrossCloudRegionMappingToAliyunResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeCrossCloudRegionMappingToAliyunResponseBody;
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
