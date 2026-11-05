import * as $dara from '@darabonba/typescript';
import { EvaluateRegionResourceResponseBody } from "./EvaluateRegionResourceResponseBody";
export declare class EvaluateRegionResourceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: EvaluateRegionResourceResponseBody;
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
