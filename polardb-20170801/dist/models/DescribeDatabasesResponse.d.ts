import * as $dara from '@darabonba/typescript';
import { DescribeDatabasesResponseBody } from "./DescribeDatabasesResponseBody";
export declare class DescribeDatabasesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDatabasesResponseBody;
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
