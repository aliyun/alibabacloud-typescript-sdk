import * as $dara from '@darabonba/typescript';
import { ModifyRCElasticScalingResponseBody } from "./ModifyRcelasticScalingResponseBody";
export declare class ModifyRCElasticScalingResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyRCElasticScalingResponseBody;
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
