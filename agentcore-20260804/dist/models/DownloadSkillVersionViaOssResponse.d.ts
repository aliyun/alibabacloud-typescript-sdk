import * as $dara from '@darabonba/typescript';
import { DownloadSkillVersionViaOssResponseBody } from "./DownloadSkillVersionViaOssResponseBody";
export declare class DownloadSkillVersionViaOssResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DownloadSkillVersionViaOssResponseBody;
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
