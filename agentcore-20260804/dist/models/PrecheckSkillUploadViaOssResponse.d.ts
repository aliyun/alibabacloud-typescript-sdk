import * as $dara from '@darabonba/typescript';
import { PrecheckSkillUploadViaOssResponseBody } from "./PrecheckSkillUploadViaOssResponseBody";
export declare class PrecheckSkillUploadViaOssResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: PrecheckSkillUploadViaOssResponseBody;
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
