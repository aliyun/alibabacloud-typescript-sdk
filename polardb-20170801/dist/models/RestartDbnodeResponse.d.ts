import * as $dara from '@darabonba/typescript';
import { RestartDBNodeResponseBody } from "./RestartDbnodeResponseBody";
export declare class RestartDBNodeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RestartDBNodeResponseBody;
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
