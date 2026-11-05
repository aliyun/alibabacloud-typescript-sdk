import * as $dara from '@darabonba/typescript';
import { DeleteLoginProfileResponseBody } from "./DeleteLoginProfileResponseBody";
export declare class DeleteLoginProfileResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteLoginProfileResponseBody;
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
