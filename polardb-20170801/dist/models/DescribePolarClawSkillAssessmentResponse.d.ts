import * as $dara from '@darabonba/typescript';
import { DescribePolarClawSkillAssessmentResponseBody } from "./DescribePolarClawSkillAssessmentResponseBody";
export declare class DescribePolarClawSkillAssessmentResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePolarClawSkillAssessmentResponseBody;
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
