import * as $dara from '@darabonba/typescript';
import { DescribeRCDeploymentSetsResponseBody } from "./DescribeRcdeploymentSetsResponseBody";
export declare class DescribeRCDeploymentSetsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRCDeploymentSetsResponseBody;
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
