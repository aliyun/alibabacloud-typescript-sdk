import * as $dara from '@darabonba/typescript';
import { DescribeSlotsResponseBody } from "./DescribeSlotsResponseBody";
export declare class DescribeSlotsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeSlotsResponseBody;
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
