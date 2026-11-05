import * as $dara from '@darabonba/typescript';
import { SaveChannelDraftResponseBody } from "./SaveChannelDraftResponseBody";
export declare class SaveChannelDraftResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SaveChannelDraftResponseBody;
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
