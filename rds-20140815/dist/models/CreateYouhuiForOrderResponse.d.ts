import * as $dara from '@darabonba/typescript';
import { CreateYouhuiForOrderResponseBody } from "./CreateYouhuiForOrderResponseBody";
export declare class CreateYouhuiForOrderResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateYouhuiForOrderResponseBody;
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
