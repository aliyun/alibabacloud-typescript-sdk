import * as $dara from '@darabonba/typescript';
import { CreateOrderForDeleteDBNodesResponseBody } from "./CreateOrderForDeleteDbnodesResponseBody";
export declare class CreateOrderForDeleteDBNodesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateOrderForDeleteDBNodesResponseBody;
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
