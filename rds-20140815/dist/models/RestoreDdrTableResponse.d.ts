import * as $dara from '@darabonba/typescript';
import { RestoreDdrTableResponseBody } from "./RestoreDdrTableResponseBody";
export declare class RestoreDdrTableResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RestoreDdrTableResponseBody;
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
