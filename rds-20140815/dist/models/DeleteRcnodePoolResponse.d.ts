import * as $dara from '@darabonba/typescript';
import { DeleteRCNodePoolResponseBody } from "./DeleteRcnodePoolResponseBody";
export declare class DeleteRCNodePoolResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteRCNodePoolResponseBody;
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
