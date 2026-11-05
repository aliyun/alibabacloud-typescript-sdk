import * as $dara from '@darabonba/typescript';
import { GetPolarClawSkillRegionResponseBody } from "./GetPolarClawSkillRegionResponseBody";
export declare class GetPolarClawSkillRegionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetPolarClawSkillRegionResponseBody;
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
