import * as $dara from '@darabonba/typescript';
import { EnableAIDBClusterDatasetServiceResponseBody } from "./EnableAidbclusterDatasetServiceResponseBody";
export declare class EnableAIDBClusterDatasetServiceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: EnableAIDBClusterDatasetServiceResponseBody;
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
