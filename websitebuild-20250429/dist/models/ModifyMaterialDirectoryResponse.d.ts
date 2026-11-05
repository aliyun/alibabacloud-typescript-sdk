import * as $dara from '@darabonba/typescript';
import { ModifyMaterialDirectoryResponseBody } from "./ModifyMaterialDirectoryResponseBody";
export declare class ModifyMaterialDirectoryResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyMaterialDirectoryResponseBody;
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
