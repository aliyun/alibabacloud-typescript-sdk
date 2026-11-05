import * as $dara from '@darabonba/typescript';
import { ApplyApplicationPromptsResponseBody } from "./ApplyApplicationPromptsResponseBody";
export declare class ApplyApplicationPromptsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ApplyApplicationPromptsResponseBody;
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
