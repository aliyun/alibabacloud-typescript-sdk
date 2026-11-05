import * as $dara from '@darabonba/typescript';
import { EnableDBClusterCTableResponseBody } from "./EnableDbclusterCtableResponseBody";
export declare class EnableDBClusterCTableResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: EnableDBClusterCTableResponseBody;
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
