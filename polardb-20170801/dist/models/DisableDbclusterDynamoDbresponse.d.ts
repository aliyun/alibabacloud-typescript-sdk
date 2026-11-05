import * as $dara from '@darabonba/typescript';
import { DisableDBClusterDynamoDBResponseBody } from "./DisableDbclusterDynamoDbresponseBody";
export declare class DisableDBClusterDynamoDBResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DisableDBClusterDynamoDBResponseBody;
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
