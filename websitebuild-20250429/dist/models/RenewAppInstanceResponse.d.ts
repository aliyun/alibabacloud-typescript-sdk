import * as $dara from '@darabonba/typescript';
import { RenewAppInstanceResponseBody } from "./RenewAppInstanceResponseBody";
export declare class RenewAppInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RenewAppInstanceResponseBody;
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
