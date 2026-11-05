import * as $dara from '@darabonba/typescript';
import { OnlineAppInstanceResponseBody } from "./OnlineAppInstanceResponseBody";
export declare class OnlineAppInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: OnlineAppInstanceResponseBody;
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
