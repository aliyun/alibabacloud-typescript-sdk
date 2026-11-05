import * as $dara from '@darabonba/typescript';
import { ListModelsResponseBody } from "./ListModelsResponseBody";
export declare class ListModelsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListModelsResponseBody;
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
