import * as $dara from '@darabonba/typescript';
import { FailoverDBClusterZonalResponseBody } from "./FailoverDbclusterZonalResponseBody";
export declare class FailoverDBClusterZonalResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: FailoverDBClusterZonalResponseBody;
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
