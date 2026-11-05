import * as $dara from '@darabonba/typescript';
import { DescribeLakebaseMountParameterGroupsResponseBody } from "./DescribeLakebaseMountParameterGroupsResponseBody";
export declare class DescribeLakebaseMountParameterGroupsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeLakebaseMountParameterGroupsResponseBody;
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
