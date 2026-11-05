import * as $dara from '@darabonba/typescript';
import { DeletePolarFsObjectsResponseBody } from "./DeletePolarFsObjectsResponseBody";
export declare class DeletePolarFsObjectsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeletePolarFsObjectsResponseBody;
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
