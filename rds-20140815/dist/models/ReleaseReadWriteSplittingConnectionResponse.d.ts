import * as $dara from '@darabonba/typescript';
import { ReleaseReadWriteSplittingConnectionResponseBody } from "./ReleaseReadWriteSplittingConnectionResponseBody";
export declare class ReleaseReadWriteSplittingConnectionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ReleaseReadWriteSplittingConnectionResponseBody;
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
