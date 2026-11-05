import * as $dara from '@darabonba/typescript';
import { TranslateChannelDraftResponseBody } from "./TranslateChannelDraftResponseBody";
export declare class TranslateChannelDraftResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: TranslateChannelDraftResponseBody;
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
