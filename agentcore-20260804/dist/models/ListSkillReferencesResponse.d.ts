import * as $dara from '@darabonba/typescript';
import { ListSkillReferencesResponseBody } from "./ListSkillReferencesResponseBody";
export declare class ListSkillReferencesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListSkillReferencesResponseBody;
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
