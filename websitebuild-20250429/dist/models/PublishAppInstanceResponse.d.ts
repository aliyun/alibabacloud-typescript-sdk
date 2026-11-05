import * as $dara from '@darabonba/typescript';
import { PublishAppInstanceResponseBody } from "./PublishAppInstanceResponseBody";
export declare class PublishAppInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: PublishAppInstanceResponseBody;
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
