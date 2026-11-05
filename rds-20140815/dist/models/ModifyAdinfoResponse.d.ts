import * as $dara from '@darabonba/typescript';
import { ModifyADInfoResponseBody } from "./ModifyAdinfoResponseBody";
export declare class ModifyADInfoResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyADInfoResponseBody;
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
