import * as $dara from '@darabonba/typescript';
import { GetModelOperatorOrderResponseBody } from "./GetModelOperatorOrderResponseBody";
export declare class GetModelOperatorOrderResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetModelOperatorOrderResponseBody;
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
