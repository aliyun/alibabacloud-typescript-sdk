import * as $dara from '@darabonba/typescript';
import { EvaluateLocalExtendDiskResponseBody } from "./EvaluateLocalExtendDiskResponseBody";
export declare class EvaluateLocalExtendDiskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: EvaluateLocalExtendDiskResponseBody;
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
