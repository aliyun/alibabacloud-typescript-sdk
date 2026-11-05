import * as $dara from '@darabonba/typescript';
import { ListModelConnectionsResponseBody } from "./ListModelConnectionsResponseBody";
export declare class ListModelConnectionsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListModelConnectionsResponseBody;
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
