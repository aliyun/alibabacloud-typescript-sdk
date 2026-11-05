import * as $dara from '@darabonba/typescript';
import { MovePolarFsObjectsResponseBody } from "./MovePolarFsObjectsResponseBody";
export declare class MovePolarFsObjectsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: MovePolarFsObjectsResponseBody;
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
