import * as $dara from '@darabonba/typescript';
import { ListUserBasicInfosResponseBody } from "./ListUserBasicInfosResponseBody";
export declare class ListUserBasicInfosResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListUserBasicInfosResponseBody;
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
