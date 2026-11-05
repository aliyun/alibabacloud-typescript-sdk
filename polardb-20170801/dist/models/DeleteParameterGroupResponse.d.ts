import * as $dara from '@darabonba/typescript';
import { DeleteParameterGroupResponseBody } from "./DeleteParameterGroupResponseBody";
export declare class DeleteParameterGroupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteParameterGroupResponseBody;
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
