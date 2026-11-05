import * as $dara from '@darabonba/typescript';
import { ListSandboxSessionsResponseBody } from "./ListSandboxSessionsResponseBody";
export declare class ListSandboxSessionsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListSandboxSessionsResponseBody;
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
