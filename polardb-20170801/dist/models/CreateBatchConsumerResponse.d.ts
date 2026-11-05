import * as $dara from '@darabonba/typescript';
import { CreateBatchConsumerResponseBody } from "./CreateBatchConsumerResponseBody";
export declare class CreateBatchConsumerResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateBatchConsumerResponseBody;
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
