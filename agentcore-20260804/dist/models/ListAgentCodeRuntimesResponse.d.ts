import * as $dara from '@darabonba/typescript';
import { ListAgentCodeRuntimesResponseBody } from "./ListAgentCodeRuntimesResponseBody";
export declare class ListAgentCodeRuntimesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListAgentCodeRuntimesResponseBody;
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
