import * as $dara from '@darabonba/typescript';
import { ResetAccountZonalResponseBody } from "./ResetAccountZonalResponseBody";
export declare class ResetAccountZonalResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ResetAccountZonalResponseBody;
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
