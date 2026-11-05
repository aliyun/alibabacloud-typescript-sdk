import * as $dara from '@darabonba/typescript';
import { UnbindUserDesktopResponseBody } from "./UnbindUserDesktopResponseBody";
export declare class UnbindUserDesktopResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UnbindUserDesktopResponseBody;
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
