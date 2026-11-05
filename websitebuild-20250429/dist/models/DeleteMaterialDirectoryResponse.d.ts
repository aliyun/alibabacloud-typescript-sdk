import * as $dara from '@darabonba/typescript';
import { DeleteMaterialDirectoryResponseBody } from "./DeleteMaterialDirectoryResponseBody";
export declare class DeleteMaterialDirectoryResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteMaterialDirectoryResponseBody;
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
