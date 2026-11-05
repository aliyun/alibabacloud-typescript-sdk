import * as $dara from '@darabonba/typescript';
import { ModifyConsumerResponseBody } from "./ModifyConsumerResponseBody";
export declare class ModifyConsumerResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyConsumerResponseBody;
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
