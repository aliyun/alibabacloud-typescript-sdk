import * as $dara from '@darabonba/typescript';
import { CreateColdStorageInstanceResponseBody } from "./CreateColdStorageInstanceResponseBody";
export declare class CreateColdStorageInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateColdStorageInstanceResponseBody;
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
