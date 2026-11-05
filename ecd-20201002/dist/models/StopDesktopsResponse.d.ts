import * as $dara from '@darabonba/typescript';
import { StopDesktopsResponseBody } from "./StopDesktopsResponseBody";
export declare class StopDesktopsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: StopDesktopsResponseBody;
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
