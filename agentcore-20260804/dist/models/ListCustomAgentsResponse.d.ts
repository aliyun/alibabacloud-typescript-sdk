import * as $dara from '@darabonba/typescript';
import { ListCustomAgentsResponseBody } from "./ListCustomAgentsResponseBody";
export declare class ListCustomAgentsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListCustomAgentsResponseBody;
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
