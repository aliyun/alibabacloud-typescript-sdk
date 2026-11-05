import * as $dara from '@darabonba/typescript';
import { ModifyRCInstanceAttributeResponseBody } from "./ModifyRcinstanceAttributeResponseBody";
export declare class ModifyRCInstanceAttributeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyRCInstanceAttributeResponseBody;
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
