import * as $dara from '@darabonba/typescript';
import { DisableDBClusterOrcaResponseBody } from "./DisableDbclusterOrcaResponseBody";
export declare class DisableDBClusterOrcaResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DisableDBClusterOrcaResponseBody;
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
