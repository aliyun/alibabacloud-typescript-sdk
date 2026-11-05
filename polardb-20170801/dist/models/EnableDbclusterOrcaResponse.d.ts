import * as $dara from '@darabonba/typescript';
import { EnableDBClusterOrcaResponseBody } from "./EnableDbclusterOrcaResponseBody";
export declare class EnableDBClusterOrcaResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: EnableDBClusterOrcaResponseBody;
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
