import * as $dara from '@darabonba/typescript';
import { DescribeSupportOnlineResizeDiskResponseBody } from "./DescribeSupportOnlineResizeDiskResponseBody";
export declare class DescribeSupportOnlineResizeDiskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeSupportOnlineResizeDiskResponseBody;
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
