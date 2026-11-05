import * as $dara from '@darabonba/typescript';
import { RestoreTableResponseBody } from "./RestoreTableResponseBody";
export declare class RestoreTableResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RestoreTableResponseBody;
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
