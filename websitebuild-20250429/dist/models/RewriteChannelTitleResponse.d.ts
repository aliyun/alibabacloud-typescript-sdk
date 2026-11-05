import * as $dara from '@darabonba/typescript';
import { RewriteChannelTitleResponseBody } from "./RewriteChannelTitleResponseBody";
export declare class RewriteChannelTitleResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RewriteChannelTitleResponseBody;
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
