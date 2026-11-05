import * as $dara from '@darabonba/typescript';
import { ListCustomAgentToolsResponseBody } from "./ListCustomAgentToolsResponseBody";
export declare class ListCustomAgentToolsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListCustomAgentToolsResponseBody;
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
