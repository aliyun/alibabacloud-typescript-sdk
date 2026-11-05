import * as $dara from '@darabonba/typescript';
import { PrecheckDuckDBDependencyResponseBody } from "./PrecheckDuckDbdependencyResponseBody";
export declare class PrecheckDuckDBDependencyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: PrecheckDuckDBDependencyResponseBody;
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
