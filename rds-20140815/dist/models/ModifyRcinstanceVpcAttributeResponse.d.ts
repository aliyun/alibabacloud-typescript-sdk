import * as $dara from '@darabonba/typescript';
import { ModifyRCInstanceVpcAttributeResponseBody } from "./ModifyRcinstanceVpcAttributeResponseBody";
export declare class ModifyRCInstanceVpcAttributeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyRCInstanceVpcAttributeResponseBody;
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
