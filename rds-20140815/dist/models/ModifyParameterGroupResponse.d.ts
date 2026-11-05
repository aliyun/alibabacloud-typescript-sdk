import * as $dara from '@darabonba/typescript';
import { ModifyParameterGroupResponseBody } from "./ModifyParameterGroupResponseBody";
export declare class ModifyParameterGroupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyParameterGroupResponseBody;
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
