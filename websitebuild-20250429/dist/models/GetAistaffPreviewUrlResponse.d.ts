import * as $dara from '@darabonba/typescript';
import { GetAIStaffPreviewUrlResponseBody } from "./GetAistaffPreviewUrlResponseBody";
export declare class GetAIStaffPreviewUrlResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAIStaffPreviewUrlResponseBody;
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
