import * as $dara from '@darabonba/typescript';
import { AllocateReadWriteSplittingConnectionResponseBody } from "./AllocateReadWriteSplittingConnectionResponseBody";
export declare class AllocateReadWriteSplittingConnectionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AllocateReadWriteSplittingConnectionResponseBody;
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
