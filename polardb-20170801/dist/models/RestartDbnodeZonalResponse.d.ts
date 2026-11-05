import * as $dara from '@darabonba/typescript';
import { RestartDBNodeZonalResponseBody } from "./RestartDbnodeZonalResponseBody";
export declare class RestartDBNodeZonalResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RestartDBNodeZonalResponseBody;
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
