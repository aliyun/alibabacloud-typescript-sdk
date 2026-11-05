import * as $dara from '@darabonba/typescript';
import { DescribeAgenticDBProjectResponseBody } from "./DescribeAgenticDbprojectResponseBody";
export declare class DescribeAgenticDBProjectResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAgenticDBProjectResponseBody;
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
