import * as $dara from '@darabonba/typescript';
import { CheckResourceMeasureResponseBody } from "./CheckResourceMeasureResponseBody";
export declare class CheckResourceMeasureResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CheckResourceMeasureResponseBody;
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
