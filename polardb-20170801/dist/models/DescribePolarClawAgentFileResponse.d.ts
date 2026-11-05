import * as $dara from '@darabonba/typescript';
import { DescribePolarClawAgentFileResponseBody } from "./DescribePolarClawAgentFileResponseBody";
export declare class DescribePolarClawAgentFileResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePolarClawAgentFileResponseBody;
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
