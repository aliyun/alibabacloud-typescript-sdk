import * as $dara from '@darabonba/typescript';
import { CreateCloudMigrationTaskResponseBody } from "./CreateCloudMigrationTaskResponseBody";
export declare class CreateCloudMigrationTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateCloudMigrationTaskResponseBody;
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
