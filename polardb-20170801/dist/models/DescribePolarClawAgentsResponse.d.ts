import * as $dara from '@darabonba/typescript';
import { DescribePolarClawAgentsResponseBody } from "./DescribePolarClawAgentsResponseBody";
export declare class DescribePolarClawAgentsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePolarClawAgentsResponseBody;
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
