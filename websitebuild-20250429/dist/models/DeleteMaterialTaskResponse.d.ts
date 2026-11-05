import * as $dara from '@darabonba/typescript';
import { DeleteMaterialTaskResponseBody } from "./DeleteMaterialTaskResponseBody";
export declare class DeleteMaterialTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteMaterialTaskResponseBody;
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
