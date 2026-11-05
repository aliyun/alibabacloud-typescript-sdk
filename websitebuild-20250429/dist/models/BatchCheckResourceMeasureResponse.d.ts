import * as $dara from '@darabonba/typescript';
import { BatchCheckResourceMeasureResponseBody } from "./BatchCheckResourceMeasureResponseBody";
export declare class BatchCheckResourceMeasureResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: BatchCheckResourceMeasureResponseBody;
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
