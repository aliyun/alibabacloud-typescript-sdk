import * as $dara from '@darabonba/typescript';
import { ConfirmAppInstanceResponseBody } from "./ConfirmAppInstanceResponseBody";
export declare class ConfirmAppInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ConfirmAppInstanceResponseBody;
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
