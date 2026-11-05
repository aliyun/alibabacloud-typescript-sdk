import * as $dara from '@darabonba/typescript';
import { RestoreUserFromRecycleBinResponseBody } from "./RestoreUserFromRecycleBinResponseBody";
export declare class RestoreUserFromRecycleBinResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RestoreUserFromRecycleBinResponseBody;
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
