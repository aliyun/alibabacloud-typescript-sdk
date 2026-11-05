import * as $dara from '@darabonba/typescript';
import { BatchDeleteModelsResponseBody } from "./BatchDeleteModelsResponseBody";
export declare class BatchDeleteModelsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: BatchDeleteModelsResponseBody;
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
