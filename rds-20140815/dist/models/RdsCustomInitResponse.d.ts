import * as $dara from '@darabonba/typescript';
import { RdsCustomInitResponseBody } from "./RdsCustomInitResponseBody";
export declare class RdsCustomInitResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RdsCustomInitResponseBody;
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
