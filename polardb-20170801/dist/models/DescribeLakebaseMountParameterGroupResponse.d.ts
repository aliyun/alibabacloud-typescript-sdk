import * as $dara from '@darabonba/typescript';
import { DescribeLakebaseMountParameterGroupResponseBody } from "./DescribeLakebaseMountParameterGroupResponseBody";
export declare class DescribeLakebaseMountParameterGroupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeLakebaseMountParameterGroupResponseBody;
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
