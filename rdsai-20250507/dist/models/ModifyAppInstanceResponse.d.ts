import * as $dara from '@darabonba/typescript';
import { ModifyAppInstanceResponseBody } from "./ModifyAppInstanceResponseBody";
export declare class ModifyAppInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyAppInstanceResponseBody;
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
