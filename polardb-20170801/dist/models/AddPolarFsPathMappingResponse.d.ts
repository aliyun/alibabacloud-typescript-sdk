import * as $dara from '@darabonba/typescript';
import { AddPolarFsPathMappingResponseBody } from "./AddPolarFsPathMappingResponseBody";
export declare class AddPolarFsPathMappingResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AddPolarFsPathMappingResponseBody;
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
