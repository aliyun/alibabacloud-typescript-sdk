import * as $dara from '@darabonba/typescript';
import { DisableDBClusterCTableResponseBody } from "./DisableDbclusterCtableResponseBody";
export declare class DisableDBClusterCTableResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DisableDBClusterCTableResponseBody;
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
