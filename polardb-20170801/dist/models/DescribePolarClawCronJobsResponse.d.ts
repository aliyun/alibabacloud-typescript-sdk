import * as $dara from '@darabonba/typescript';
import { DescribePolarClawCronJobsResponseBody } from "./DescribePolarClawCronJobsResponseBody";
export declare class DescribePolarClawCronJobsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePolarClawCronJobsResponseBody;
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
