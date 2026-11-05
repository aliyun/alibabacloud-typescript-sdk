import * as $dara from '@darabonba/typescript';
import { DescribeRCElasticScalingResponseBody } from "./DescribeRcelasticScalingResponseBody";
export declare class DescribeRCElasticScalingResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRCElasticScalingResponseBody;
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
