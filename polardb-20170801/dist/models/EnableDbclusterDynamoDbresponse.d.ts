import * as $dara from '@darabonba/typescript';
import { EnableDBClusterDynamoDBResponseBody } from "./EnableDbclusterDynamoDbresponseBody";
export declare class EnableDBClusterDynamoDBResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: EnableDBClusterDynamoDBResponseBody;
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
