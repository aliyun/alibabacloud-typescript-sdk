import * as $dara from '@darabonba/typescript';
import { ListIsvPaymentPluginConfigsResponseBody } from "./ListIsvPaymentPluginConfigsResponseBody";
export declare class ListIsvPaymentPluginConfigsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListIsvPaymentPluginConfigsResponseBody;
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
