import * as $dara from '@darabonba/typescript';
import { GetPolarClawConfigResponseBody } from "./GetPolarClawConfigResponseBody";
export declare class GetPolarClawConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetPolarClawConfigResponseBody;
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
