import * as $dara from '@darabonba/typescript';
import { ModifyActiveOperationMaintainConfResponseBody } from "./ModifyActiveOperationMaintainConfResponseBody";
export declare class ModifyActiveOperationMaintainConfResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyActiveOperationMaintainConfResponseBody;
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
