import * as $dara from '@darabonba/typescript';
import { ListConnectorModelsResponseBody } from "./ListConnectorModelsResponseBody";
export declare class ListConnectorModelsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListConnectorModelsResponseBody;
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
