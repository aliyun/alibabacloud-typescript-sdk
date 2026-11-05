import * as $dara from '@darabonba/typescript';
import { ModifyActionEventPolicyResponseBody } from "./ModifyActionEventPolicyResponseBody";
export declare class ModifyActionEventPolicyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyActionEventPolicyResponseBody;
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
