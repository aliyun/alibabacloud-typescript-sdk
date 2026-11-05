import * as $dara from '@darabonba/typescript';
import { CreateConsumerResponseBody } from "./CreateConsumerResponseBody";
export declare class CreateConsumerResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateConsumerResponseBody;
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
