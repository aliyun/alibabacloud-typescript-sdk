import * as $dara from '@darabonba/typescript';
import { EnableDBClusterServerlessResponseBody } from "./EnableDbclusterServerlessResponseBody";
export declare class EnableDBClusterServerlessResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: EnableDBClusterServerlessResponseBody;
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
