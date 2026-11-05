import * as $dara from '@darabonba/typescript';
import { DescribeUpgradeMajorVersionTasksResponseBody } from "./DescribeUpgradeMajorVersionTasksResponseBody";
export declare class DescribeUpgradeMajorVersionTasksResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeUpgradeMajorVersionTasksResponseBody;
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
