import * as $dara from '@darabonba/typescript';
import { BatchUploadSkillsViaOssResponseBody } from "./BatchUploadSkillsViaOssResponseBody";
export declare class BatchUploadSkillsViaOssResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: BatchUploadSkillsViaOssResponseBody;
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
