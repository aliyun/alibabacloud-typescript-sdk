import * as $dara from '@darabonba/typescript';
import { EnableDBClusterDocumentDBResponseBody } from "./EnableDbclusterDocumentDbresponseBody";
export declare class EnableDBClusterDocumentDBResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: EnableDBClusterDocumentDBResponseBody;
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
