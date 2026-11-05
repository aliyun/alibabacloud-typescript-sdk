import * as $dara from '@darabonba/typescript';
import { CreateGwConsumerOrderResponseBody } from "./CreateGwConsumerOrderResponseBody";
export declare class CreateGwConsumerOrderResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateGwConsumerOrderResponseBody;
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
