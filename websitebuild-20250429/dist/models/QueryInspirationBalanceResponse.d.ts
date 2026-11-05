import * as $dara from '@darabonba/typescript';
import { QueryInspirationBalanceResponseBody } from "./QueryInspirationBalanceResponseBody";
export declare class QueryInspirationBalanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: QueryInspirationBalanceResponseBody;
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
