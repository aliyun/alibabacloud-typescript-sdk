import * as $dara from '@darabonba/typescript';
import { ListConnectorsResponseBody } from "./ListConnectorsResponseBody";
export declare class ListConnectorsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListConnectorsResponseBody;
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
