import * as $dara from '@darabonba/typescript';
import { CreateRCNodePoolResponseBody } from "./CreateRcnodePoolResponseBody";
export declare class CreateRCNodePoolResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateRCNodePoolResponseBody;
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
