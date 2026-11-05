import * as $dara from '@darabonba/typescript';
import { PatchPolarClawConfigResponseBody } from "./PatchPolarClawConfigResponseBody";
export declare class PatchPolarClawConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: PatchPolarClawConfigResponseBody;
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
