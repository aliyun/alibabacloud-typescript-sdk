import * as $dara from '@darabonba/typescript';
import { DescribePolarClawSkillsMarketResponseBody } from "./DescribePolarClawSkillsMarketResponseBody";
export declare class DescribePolarClawSkillsMarketResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePolarClawSkillsMarketResponseBody;
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
