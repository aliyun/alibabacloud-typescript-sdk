import * as $dara from '@darabonba/typescript';
import { ModifyPolarFsInstanceDescriptionResponseBody } from "./ModifyPolarFsInstanceDescriptionResponseBody";
export declare class ModifyPolarFsInstanceDescriptionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyPolarFsInstanceDescriptionResponseBody;
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
