import * as $dara from '@darabonba/typescript';
import { PushResourceMeasureResponseBody } from "./PushResourceMeasureResponseBody";
export declare class PushResourceMeasureResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: PushResourceMeasureResponseBody;
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
