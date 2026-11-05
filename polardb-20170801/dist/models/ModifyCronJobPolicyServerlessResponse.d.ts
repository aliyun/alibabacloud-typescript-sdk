import * as $dara from '@darabonba/typescript';
import { ModifyCronJobPolicyServerlessResponseBody } from "./ModifyCronJobPolicyServerlessResponseBody";
export declare class ModifyCronJobPolicyServerlessResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyCronJobPolicyServerlessResponseBody;
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
