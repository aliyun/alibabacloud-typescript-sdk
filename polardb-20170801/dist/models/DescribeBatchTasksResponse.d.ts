import * as $dara from '@darabonba/typescript';
import { DescribeBatchTasksResponseBody } from "./DescribeBatchTasksResponseBody";
export declare class DescribeBatchTasksResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeBatchTasksResponseBody;
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
