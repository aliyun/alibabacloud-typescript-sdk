import * as $dara from '@darabonba/typescript';
import { CreateMultiOrderResponseBody } from "./CreateMultiOrderResponseBody";
export declare class CreateMultiOrderResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateMultiOrderResponseBody;
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
