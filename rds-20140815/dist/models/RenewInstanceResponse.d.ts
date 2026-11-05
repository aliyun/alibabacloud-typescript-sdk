import * as $dara from '@darabonba/typescript';
import { RenewInstanceResponseBody } from "./RenewInstanceResponseBody";
export declare class RenewInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RenewInstanceResponseBody;
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
