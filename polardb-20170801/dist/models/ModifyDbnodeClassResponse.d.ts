import * as $dara from '@darabonba/typescript';
import { ModifyDBNodeClassResponseBody } from "./ModifyDbnodeClassResponseBody";
export declare class ModifyDBNodeClassResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBNodeClassResponseBody;
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
