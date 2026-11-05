import * as $dara from '@darabonba/typescript';
import { ModifyMessagesFeedbacksResponseBody } from "./ModifyMessagesFeedbacksResponseBody";
export declare class ModifyMessagesFeedbacksResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyMessagesFeedbacksResponseBody;
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
