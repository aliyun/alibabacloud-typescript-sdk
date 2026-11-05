import * as $dara from '@darabonba/typescript';
import { DescribeSharedBackupsResponseBody } from "./DescribeSharedBackupsResponseBody";
export declare class DescribeSharedBackupsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeSharedBackupsResponseBody;
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
