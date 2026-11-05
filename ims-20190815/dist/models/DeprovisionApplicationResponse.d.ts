import * as $dara from '@darabonba/typescript';
import { DeprovisionApplicationResponseBody } from "./DeprovisionApplicationResponseBody";
export declare class DeprovisionApplicationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeprovisionApplicationResponseBody;
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
