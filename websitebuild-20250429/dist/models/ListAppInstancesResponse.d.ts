import * as $dara from '@darabonba/typescript';
import { ListAppInstancesResponseBody } from "./ListAppInstancesResponseBody";
export declare class ListAppInstancesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListAppInstancesResponseBody;
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
