import * as $dara from '@darabonba/typescript';
import { GetAppInstanceTempShortUrlResponseBody } from "./GetAppInstanceTempShortUrlResponseBody";
export declare class GetAppInstanceTempShortUrlResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAppInstanceTempShortUrlResponseBody;
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
