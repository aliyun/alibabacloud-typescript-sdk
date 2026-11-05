import * as $dara from '@darabonba/typescript';
import { CreateCronJobPolicyServerlessResponseBody } from "./CreateCronJobPolicyServerlessResponseBody";
export declare class CreateCronJobPolicyServerlessResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateCronJobPolicyServerlessResponseBody;
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
