import * as $dara from '@darabonba/typescript';
import { CreateRCImageResponseBody } from "./CreateRcimageResponseBody";
export declare class CreateRCImageResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateRCImageResponseBody;
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
