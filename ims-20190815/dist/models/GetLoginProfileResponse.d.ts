import * as $dara from '@darabonba/typescript';
import { GetLoginProfileResponseBody } from "./GetLoginProfileResponseBody";
export declare class GetLoginProfileResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetLoginProfileResponseBody;
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
