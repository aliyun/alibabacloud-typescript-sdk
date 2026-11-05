import * as $dara from '@darabonba/typescript';
import { ModifyDBNodeResponseBody } from "./ModifyDbnodeResponseBody";
export declare class ModifyDBNodeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBNodeResponseBody;
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
