import * as $dara from '@darabonba/typescript';
import { CreateParameterGroupResponseBody } from "./CreateParameterGroupResponseBody";
export declare class CreateParameterGroupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateParameterGroupResponseBody;
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
