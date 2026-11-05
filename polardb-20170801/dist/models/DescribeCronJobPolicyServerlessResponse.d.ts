import * as $dara from '@darabonba/typescript';
import { DescribeCronJobPolicyServerlessResponseBody } from "./DescribeCronJobPolicyServerlessResponseBody";
export declare class DescribeCronJobPolicyServerlessResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeCronJobPolicyServerlessResponseBody;
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
