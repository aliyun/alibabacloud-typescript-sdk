import * as $dara from '@darabonba/typescript';
import { DescribePolarAgentChatRecordsResponseBody } from "./DescribePolarAgentChatRecordsResponseBody";
export declare class DescribePolarAgentChatRecordsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePolarAgentChatRecordsResponseBody;
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
