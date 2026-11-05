import * as $dara from '@darabonba/typescript';
import { ModifyResourceControlResponseBody } from "./ModifyResourceControlResponseBody";
export declare class ModifyResourceControlResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyResourceControlResponseBody;
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
