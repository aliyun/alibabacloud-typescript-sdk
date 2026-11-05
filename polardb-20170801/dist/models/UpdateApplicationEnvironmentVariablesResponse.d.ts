import * as $dara from '@darabonba/typescript';
import { UpdateApplicationEnvironmentVariablesResponseBody } from "./UpdateApplicationEnvironmentVariablesResponseBody";
export declare class UpdateApplicationEnvironmentVariablesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateApplicationEnvironmentVariablesResponseBody;
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
