import * as $dara from '@darabonba/typescript';
import { UpdateLoginProfileResponseBody } from "./UpdateLoginProfileResponseBody";
export declare class UpdateLoginProfileResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateLoginProfileResponseBody;
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
