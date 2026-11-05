import * as $dara from '@darabonba/typescript';
import { DescribePolarClawTaskResponseBody } from "./DescribePolarClawTaskResponseBody";
export declare class DescribePolarClawTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePolarClawTaskResponseBody;
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
