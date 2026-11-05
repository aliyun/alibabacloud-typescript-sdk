import * as $dara from '@darabonba/typescript';
import { CreateCloudMigrationPrecheckTaskResponseBody } from "./CreateCloudMigrationPrecheckTaskResponseBody";
export declare class CreateCloudMigrationPrecheckTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateCloudMigrationPrecheckTaskResponseBody;
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
