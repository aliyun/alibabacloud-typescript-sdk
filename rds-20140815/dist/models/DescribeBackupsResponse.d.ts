import * as $dara from '@darabonba/typescript';
import { DescribeBackupsResponseBody } from "./DescribeBackupsResponseBody";
export declare class DescribeBackupsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeBackupsResponseBody;
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
