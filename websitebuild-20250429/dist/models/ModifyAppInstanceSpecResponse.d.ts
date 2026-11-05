import * as $dara from '@darabonba/typescript';
import { ModifyAppInstanceSpecResponseBody } from "./ModifyAppInstanceSpecResponseBody";
export declare class ModifyAppInstanceSpecResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyAppInstanceSpecResponseBody;
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
