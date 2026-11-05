import * as $dara from '@darabonba/typescript';
import { ModifyConsumerGroupResponseBody } from "./ModifyConsumerGroupResponseBody";
export declare class ModifyConsumerGroupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyConsumerGroupResponseBody;
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
