import * as $dara from '@darabonba/typescript';
import { RemoveApplicationEnvironmentVariablesResponseBody } from "./RemoveApplicationEnvironmentVariablesResponseBody";
export declare class RemoveApplicationEnvironmentVariablesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RemoveApplicationEnvironmentVariablesResponseBody;
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
