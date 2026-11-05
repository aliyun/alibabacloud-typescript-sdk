import * as $dara from '@darabonba/typescript';
import { DeleteAccountZonalResponseBody } from "./DeleteAccountZonalResponseBody";
export declare class DeleteAccountZonalResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteAccountZonalResponseBody;
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
