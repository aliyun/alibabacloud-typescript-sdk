import * as $dara from '@darabonba/typescript';
import { CreateLakebaseMountParameterGroupResponseBody } from "./CreateLakebaseMountParameterGroupResponseBody";
export declare class CreateLakebaseMountParameterGroupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateLakebaseMountParameterGroupResponseBody;
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
