import * as $dara from '@darabonba/typescript';
import { DescribeCrossCloudRegionResponseBody } from "./DescribeCrossCloudRegionResponseBody";
export declare class DescribeCrossCloudRegionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeCrossCloudRegionResponseBody;
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
