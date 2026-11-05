import * as $dara from '@darabonba/typescript';
import { ModifyDatabaseConfigResponseBody } from "./ModifyDatabaseConfigResponseBody";
export declare class ModifyDatabaseConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDatabaseConfigResponseBody;
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
