import * as $dara from '@darabonba/typescript';
import { CancelCronJobPolicyServerlessResponseBody } from "./CancelCronJobPolicyServerlessResponseBody";
export declare class CancelCronJobPolicyServerlessResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CancelCronJobPolicyServerlessResponseBody;
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
