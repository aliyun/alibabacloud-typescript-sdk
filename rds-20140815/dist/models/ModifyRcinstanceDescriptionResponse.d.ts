import * as $dara from '@darabonba/typescript';
import { ModifyRCInstanceDescriptionResponseBody } from "./ModifyRcinstanceDescriptionResponseBody";
export declare class ModifyRCInstanceDescriptionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyRCInstanceDescriptionResponseBody;
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
