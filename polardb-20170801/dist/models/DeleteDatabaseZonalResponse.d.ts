import * as $dara from '@darabonba/typescript';
import { DeleteDatabaseZonalResponseBody } from "./DeleteDatabaseZonalResponseBody";
export declare class DeleteDatabaseZonalResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteDatabaseZonalResponseBody;
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
