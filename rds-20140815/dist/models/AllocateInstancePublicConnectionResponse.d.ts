import * as $dara from '@darabonba/typescript';
import { AllocateInstancePublicConnectionResponseBody } from "./AllocateInstancePublicConnectionResponseBody";
export declare class AllocateInstancePublicConnectionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AllocateInstancePublicConnectionResponseBody;
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
