import * as $dara from '@darabonba/typescript';
import { DescribeDatabasesZonalResponseBody } from "./DescribeDatabasesZonalResponseBody";
export declare class DescribeDatabasesZonalResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDatabasesZonalResponseBody;
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
