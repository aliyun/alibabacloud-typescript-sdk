import * as $dara from '@darabonba/typescript';
import { ReleaseInstanceConnectionResponseBody } from "./ReleaseInstanceConnectionResponseBody";
export declare class ReleaseInstanceConnectionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ReleaseInstanceConnectionResponseBody;
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
