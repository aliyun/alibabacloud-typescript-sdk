import * as $dara from '@darabonba/typescript';
import { CreateConsumerGroupResponseBody } from "./CreateConsumerGroupResponseBody";
export declare class CreateConsumerGroupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateConsumerGroupResponseBody;
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
