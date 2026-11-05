import * as $dara from '@darabonba/typescript';
import { SubmitMaterialTaskResponseBody } from "./SubmitMaterialTaskResponseBody";
export declare class SubmitMaterialTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SubmitMaterialTaskResponseBody;
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
