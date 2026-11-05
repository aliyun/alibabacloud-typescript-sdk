import * as $dara from '@darabonba/typescript';
import { DeletePolarFsPathMappingResponseBody } from "./DeletePolarFsPathMappingResponseBody";
export declare class DeletePolarFsPathMappingResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeletePolarFsPathMappingResponseBody;
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
