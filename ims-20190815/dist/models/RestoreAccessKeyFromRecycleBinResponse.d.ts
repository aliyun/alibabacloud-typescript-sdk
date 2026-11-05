import * as $dara from '@darabonba/typescript';
import { RestoreAccessKeyFromRecycleBinResponseBody } from "./RestoreAccessKeyFromRecycleBinResponseBody";
export declare class RestoreAccessKeyFromRecycleBinResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RestoreAccessKeyFromRecycleBinResponseBody;
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
