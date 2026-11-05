import * as $dara from '@darabonba/typescript';
import { GetScheduledInstancesResponseBody } from "./GetScheduledInstancesResponseBody";
export declare class GetScheduledInstancesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetScheduledInstancesResponseBody;
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
