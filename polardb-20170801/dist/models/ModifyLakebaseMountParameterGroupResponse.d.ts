import * as $dara from '@darabonba/typescript';
import { ModifyLakebaseMountParameterGroupResponseBody } from "./ModifyLakebaseMountParameterGroupResponseBody";
export declare class ModifyLakebaseMountParameterGroupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyLakebaseMountParameterGroupResponseBody;
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
