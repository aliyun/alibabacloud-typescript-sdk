import * as $dara from '@darabonba/typescript';
import { ReleaseInstancePublicConnectionResponseBody } from "./ReleaseInstancePublicConnectionResponseBody";
export declare class ReleaseInstancePublicConnectionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ReleaseInstancePublicConnectionResponseBody;
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
