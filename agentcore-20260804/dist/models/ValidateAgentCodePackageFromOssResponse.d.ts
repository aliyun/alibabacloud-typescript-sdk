import * as $dara from '@darabonba/typescript';
import { ValidateAgentCodePackageFromOssResponseBody } from "./ValidateAgentCodePackageFromOssResponseBody";
export declare class ValidateAgentCodePackageFromOssResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ValidateAgentCodePackageFromOssResponseBody;
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
