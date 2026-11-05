import * as $dara from '@darabonba/typescript';
import { DescribeMigrateTaskByIdResponseBody } from "./DescribeMigrateTaskByIdResponseBody";
export declare class DescribeMigrateTaskByIdResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeMigrateTaskByIdResponseBody;
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
