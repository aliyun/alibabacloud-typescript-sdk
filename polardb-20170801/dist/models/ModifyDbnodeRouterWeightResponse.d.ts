import * as $dara from '@darabonba/typescript';
import { ModifyDBNodeRouterWeightResponseBody } from "./ModifyDbnodeRouterWeightResponseBody";
export declare class ModifyDBNodeRouterWeightResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBNodeRouterWeightResponseBody;
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
