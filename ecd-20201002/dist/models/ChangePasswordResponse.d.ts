import * as $dara from '@darabonba/typescript';
import { ChangePasswordResponseBody } from "./ChangePasswordResponseBody";
export declare class ChangePasswordResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ChangePasswordResponseBody;
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
