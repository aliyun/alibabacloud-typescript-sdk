import * as $dara from '@darabonba/typescript';
import { ModifyResourceGroupResponseBody } from "./ModifyResourceGroupResponseBody";
export declare class ModifyResourceGroupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyResourceGroupResponseBody;
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
