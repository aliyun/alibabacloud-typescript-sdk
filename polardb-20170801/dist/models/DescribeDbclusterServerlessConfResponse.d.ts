import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterServerlessConfResponseBody } from "./DescribeDbclusterServerlessConfResponseBody";
export declare class DescribeDBClusterServerlessConfResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBClusterServerlessConfResponseBody;
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
