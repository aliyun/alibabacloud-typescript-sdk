import * as $dara from '@darabonba/typescript';
import { ListPredefinedModelProvidersResponseBody } from "./ListPredefinedModelProvidersResponseBody";
export declare class ListPredefinedModelProvidersResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListPredefinedModelProvidersResponseBody;
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
