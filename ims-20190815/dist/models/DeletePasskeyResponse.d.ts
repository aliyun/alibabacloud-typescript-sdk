import * as $dara from '@darabonba/typescript';
import { DeletePasskeyResponseBody } from "./DeletePasskeyResponseBody";
export declare class DeletePasskeyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeletePasskeyResponseBody;
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
