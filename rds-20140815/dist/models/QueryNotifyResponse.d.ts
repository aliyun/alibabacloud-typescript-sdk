import * as $dara from '@darabonba/typescript';
import { QueryNotifyResponseBody } from "./QueryNotifyResponseBody";
export declare class QueryNotifyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: QueryNotifyResponseBody;
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
