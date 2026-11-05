import * as $dara from '@darabonba/typescript';
import { ModifyEventInfoResponseBody } from "./ModifyEventInfoResponseBody";
export declare class ModifyEventInfoResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyEventInfoResponseBody;
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
