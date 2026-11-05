import * as $dara from '@darabonba/typescript';
import { DescribeAgenticDBProjectsResponseBody } from "./DescribeAgenticDbprojectsResponseBody";
export declare class DescribeAgenticDBProjectsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAgenticDBProjectsResponseBody;
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
