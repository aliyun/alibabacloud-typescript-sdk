import * as $dara from '@darabonba/typescript';
import { DeleteAccessApplicationResponseBody } from "./DeleteAccessApplicationResponseBody";
export declare class DeleteAccessApplicationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteAccessApplicationResponseBody;
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
