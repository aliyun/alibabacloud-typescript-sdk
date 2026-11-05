import * as $dara from '@darabonba/typescript';
import { ListPredefinedModelsResponseBody } from "./ListPredefinedModelsResponseBody";
export declare class ListPredefinedModelsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListPredefinedModelsResponseBody;
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
