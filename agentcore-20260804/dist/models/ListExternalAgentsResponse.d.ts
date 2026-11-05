import * as $dara from '@darabonba/typescript';
import { ListExternalAgentsResponseBody } from "./ListExternalAgentsResponseBody";
export declare class ListExternalAgentsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListExternalAgentsResponseBody;
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
