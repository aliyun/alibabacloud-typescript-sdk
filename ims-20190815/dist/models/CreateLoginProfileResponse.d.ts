import * as $dara from '@darabonba/typescript';
import { CreateLoginProfileResponseBody } from "./CreateLoginProfileResponseBody";
export declare class CreateLoginProfileResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateLoginProfileResponseBody;
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
