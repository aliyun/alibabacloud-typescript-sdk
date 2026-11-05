import * as $dara from '@darabonba/typescript';
import { GetAccessKeyInfoInRecycleBinResponseBody } from "./GetAccessKeyInfoInRecycleBinResponseBody";
export declare class GetAccessKeyInfoInRecycleBinResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAccessKeyInfoInRecycleBinResponseBody;
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
