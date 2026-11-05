import * as $dara from '@darabonba/typescript';
import { DeleteGadInstanceResponseBody } from "./DeleteGadInstanceResponseBody";
export declare class DeleteGadInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteGadInstanceResponseBody;
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
