import * as $dara from '@darabonba/typescript';
import { DescribePolarClawAgentToolsResponseBody } from "./DescribePolarClawAgentToolsResponseBody";
export declare class DescribePolarClawAgentToolsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePolarClawAgentToolsResponseBody;
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
