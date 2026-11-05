import * as $dara from '@darabonba/typescript';
import { GetModelConnectionResponseBody } from "./GetModelConnectionResponseBody";
export declare class GetModelConnectionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetModelConnectionResponseBody;
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
