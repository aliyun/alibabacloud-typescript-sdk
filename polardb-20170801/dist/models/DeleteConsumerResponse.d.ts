import * as $dara from '@darabonba/typescript';
import { DeleteConsumerResponseBody } from "./DeleteConsumerResponseBody";
export declare class DeleteConsumerResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteConsumerResponseBody;
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
