import * as $dara from '@darabonba/typescript';
import { UpdateSkillScopeResponseBody } from "./UpdateSkillScopeResponseBody";
export declare class UpdateSkillScopeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateSkillScopeResponseBody;
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
