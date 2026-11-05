import * as $dara from '@darabonba/typescript';
import { ModifyMaterialFileStatusResponseBody } from "./ModifyMaterialFileStatusResponseBody";
export declare class ModifyMaterialFileStatusResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyMaterialFileStatusResponseBody;
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
