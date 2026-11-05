import * as $dara from '@darabonba/typescript';
import { DescribeMigrateTasksResponseBody } from "./DescribeMigrateTasksResponseBody";
export declare class DescribeMigrateTasksResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeMigrateTasksResponseBody;
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
