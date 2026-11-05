import * as $dara from '@darabonba/typescript';
import { CreatePolarClawSkillTemplateResponseBody } from "./CreatePolarClawSkillTemplateResponseBody";
export declare class CreatePolarClawSkillTemplateResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreatePolarClawSkillTemplateResponseBody;
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
