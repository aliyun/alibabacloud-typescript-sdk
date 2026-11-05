import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterTDEResponseBody } from "./DescribeDbclusterTderesponseBody";
export declare class DescribeDBClusterTDEResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBClusterTDEResponseBody;
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
