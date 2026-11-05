import * as $dara from '@darabonba/typescript';
import { UpdatePolarClawAgentSkillsResponseBody } from "./UpdatePolarClawAgentSkillsResponseBody";
export declare class UpdatePolarClawAgentSkillsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdatePolarClawAgentSkillsResponseBody;
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
