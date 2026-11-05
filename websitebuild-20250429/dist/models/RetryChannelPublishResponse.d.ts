import * as $dara from '@darabonba/typescript';
import { RetryChannelPublishResponseBody } from "./RetryChannelPublishResponseBody";
export declare class RetryChannelPublishResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RetryChannelPublishResponseBody;
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
