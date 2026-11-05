import * as $dara from '@darabonba/typescript';
import { GetWorkspaceResponseBody } from "./GetWorkspaceResponseBody";
export declare class GetWorkspaceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetWorkspaceResponseBody;
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
