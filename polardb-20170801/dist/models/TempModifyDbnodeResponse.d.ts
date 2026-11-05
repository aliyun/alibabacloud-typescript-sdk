import * as $dara from '@darabonba/typescript';
import { TempModifyDBNodeResponseBody } from "./TempModifyDbnodeResponseBody";
export declare class TempModifyDBNodeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: TempModifyDBNodeResponseBody;
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
