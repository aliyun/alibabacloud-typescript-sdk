import * as $dara from '@darabonba/typescript';
import { MoveMaterialFileResponseBody } from "./MoveMaterialFileResponseBody";
export declare class MoveMaterialFileResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: MoveMaterialFileResponseBody;
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
