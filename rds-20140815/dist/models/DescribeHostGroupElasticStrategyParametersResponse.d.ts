import * as $dara from '@darabonba/typescript';
import { DescribeHostGroupElasticStrategyParametersResponseBody } from "./DescribeHostGroupElasticStrategyParametersResponseBody";
export declare class DescribeHostGroupElasticStrategyParametersResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeHostGroupElasticStrategyParametersResponseBody;
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
