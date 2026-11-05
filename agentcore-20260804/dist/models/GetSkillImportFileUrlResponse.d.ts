import * as $dara from '@darabonba/typescript';
import { GetSkillImportFileUrlResponseBody } from "./GetSkillImportFileUrlResponseBody";
export declare class GetSkillImportFileUrlResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetSkillImportFileUrlResponseBody;
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
