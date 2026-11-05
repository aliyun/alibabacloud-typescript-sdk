import * as $dara from '@darabonba/typescript';
import { CopyDatabaseBetweenInstancesResponseBody } from "./CopyDatabaseBetweenInstancesResponseBody";
export declare class CopyDatabaseBetweenInstancesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CopyDatabaseBetweenInstancesResponseBody;
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
