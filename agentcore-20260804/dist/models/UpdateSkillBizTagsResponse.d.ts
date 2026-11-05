import * as $dara from '@darabonba/typescript';
import { UpdateSkillBizTagsResponseBody } from "./UpdateSkillBizTagsResponseBody";
export declare class UpdateSkillBizTagsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateSkillBizTagsResponseBody;
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
