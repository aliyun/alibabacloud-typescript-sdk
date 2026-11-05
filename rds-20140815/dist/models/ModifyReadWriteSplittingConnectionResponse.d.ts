import * as $dara from '@darabonba/typescript';
import { ModifyReadWriteSplittingConnectionResponseBody } from "./ModifyReadWriteSplittingConnectionResponseBody";
export declare class ModifyReadWriteSplittingConnectionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyReadWriteSplittingConnectionResponseBody;
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
