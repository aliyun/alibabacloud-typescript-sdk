import * as $dara from '@darabonba/typescript';
import { DescribePolarClawSkillsResponseBody } from "./DescribePolarClawSkillsResponseBody";
export declare class DescribePolarClawSkillsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePolarClawSkillsResponseBody;
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
