import * as $dara from '@darabonba/typescript';
import { DeleteSlotResponseBody } from "./DeleteSlotResponseBody";
export declare class DeleteSlotResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteSlotResponseBody;
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
