import * as $dara from '@darabonba/typescript';
import { ModifyAccountCheckPolicyResponseBody } from "./ModifyAccountCheckPolicyResponseBody";
export declare class ModifyAccountCheckPolicyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyAccountCheckPolicyResponseBody;
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
