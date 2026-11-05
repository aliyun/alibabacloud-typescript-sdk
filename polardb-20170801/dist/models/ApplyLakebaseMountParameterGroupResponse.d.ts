import * as $dara from '@darabonba/typescript';
import { ApplyLakebaseMountParameterGroupResponseBody } from "./ApplyLakebaseMountParameterGroupResponseBody";
export declare class ApplyLakebaseMountParameterGroupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ApplyLakebaseMountParameterGroupResponseBody;
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
