import * as $dara from '@darabonba/typescript';
import { DescribePolarClawSkillTemplateResponseBody } from "./DescribePolarClawSkillTemplateResponseBody";
export declare class DescribePolarClawSkillTemplateResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePolarClawSkillTemplateResponseBody;
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
