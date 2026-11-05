import * as $dara from '@darabonba/typescript';
import { ModifyTaskInfoResponseBody } from "./ModifyTaskInfoResponseBody";
export declare class ModifyTaskInfoResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyTaskInfoResponseBody;
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
