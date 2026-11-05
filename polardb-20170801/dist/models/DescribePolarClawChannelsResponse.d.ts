import * as $dara from '@darabonba/typescript';
import { DescribePolarClawChannelsResponseBody } from "./DescribePolarClawChannelsResponseBody";
export declare class DescribePolarClawChannelsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePolarClawChannelsResponseBody;
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
