import * as $dara from '@darabonba/typescript';
import { GetModelResponseBody } from "./GetModelResponseBody";
export declare class GetModelResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetModelResponseBody;
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
