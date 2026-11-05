import * as $dara from '@darabonba/typescript';
import { MoveMaterialDirectoryResponseBody } from "./MoveMaterialDirectoryResponseBody";
export declare class MoveMaterialDirectoryResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: MoveMaterialDirectoryResponseBody;
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
