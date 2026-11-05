import * as $dara from '@darabonba/typescript';
import { ModifyRCDiskAttributeResponseBody } from "./ModifyRcdiskAttributeResponseBody";
export declare class ModifyRCDiskAttributeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyRCDiskAttributeResponseBody;
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
