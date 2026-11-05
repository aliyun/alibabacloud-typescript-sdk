import * as $dara from '@darabonba/typescript';
import { DeleteLakebaseMountParameterGroupResponseBody } from "./DeleteLakebaseMountParameterGroupResponseBody";
export declare class DeleteLakebaseMountParameterGroupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteLakebaseMountParameterGroupResponseBody;
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
