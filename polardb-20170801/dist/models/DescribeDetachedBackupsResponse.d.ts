import * as $dara from '@darabonba/typescript';
import { DescribeDetachedBackupsResponseBody } from "./DescribeDetachedBackupsResponseBody";
export declare class DescribeDetachedBackupsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDetachedBackupsResponseBody;
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
