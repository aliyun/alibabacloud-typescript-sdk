import * as $dara from '@darabonba/typescript';
import { UploadSkillViaOssResponseBody } from "./UploadSkillViaOssResponseBody";
export declare class UploadSkillViaOssResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UploadSkillViaOssResponseBody;
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
