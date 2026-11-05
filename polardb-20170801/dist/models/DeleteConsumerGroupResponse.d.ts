import * as $dara from '@darabonba/typescript';
import { DeleteConsumerGroupResponseBody } from "./DeleteConsumerGroupResponseBody";
export declare class DeleteConsumerGroupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteConsumerGroupResponseBody;
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
