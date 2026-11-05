import * as $dara from '@darabonba/typescript';
import { DeletePolarFsResponseBody } from "./DeletePolarFsResponseBody";
export declare class DeletePolarFsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeletePolarFsResponseBody;
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
