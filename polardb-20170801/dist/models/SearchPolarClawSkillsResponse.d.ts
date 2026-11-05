import * as $dara from '@darabonba/typescript';
import { SearchPolarClawSkillsResponseBody } from "./SearchPolarClawSkillsResponseBody";
export declare class SearchPolarClawSkillsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SearchPolarClawSkillsResponseBody;
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
