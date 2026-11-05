import * as $dara from '@darabonba/typescript';
import { DisableDBClusterDocumentDBResponseBody } from "./DisableDbclusterDocumentDbresponseBody";
export declare class DisableDBClusterDocumentDBResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DisableDBClusterDocumentDBResponseBody;
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
