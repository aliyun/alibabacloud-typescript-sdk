import * as $dara from '@darabonba/typescript';
import { DescribeCrossCloudLevelsResponseBody } from "./DescribeCrossCloudLevelsResponseBody";
export declare class DescribeCrossCloudLevelsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeCrossCloudLevelsResponseBody;
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
