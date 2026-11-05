import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceByTagsResponseBody } from "./DescribeDbinstanceByTagsResponseBody";
export declare class DescribeDBInstanceByTagsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBInstanceByTagsResponseBody;
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
