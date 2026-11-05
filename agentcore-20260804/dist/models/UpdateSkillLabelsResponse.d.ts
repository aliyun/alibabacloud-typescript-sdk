import * as $dara from '@darabonba/typescript';
import { UpdateSkillLabelsResponseBody } from "./UpdateSkillLabelsResponseBody";
export declare class UpdateSkillLabelsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateSkillLabelsResponseBody;
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
