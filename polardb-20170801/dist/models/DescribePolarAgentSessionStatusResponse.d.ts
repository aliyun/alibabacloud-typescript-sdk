import * as $dara from '@darabonba/typescript';
import { DescribePolarAgentSessionStatusResponseBody } from "./DescribePolarAgentSessionStatusResponseBody";
export declare class DescribePolarAgentSessionStatusResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePolarAgentSessionStatusResponseBody;
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
