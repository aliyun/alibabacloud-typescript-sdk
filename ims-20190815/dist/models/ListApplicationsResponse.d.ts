import * as $dara from '@darabonba/typescript';
import { ListApplicationsResponseBody } from "./ListApplicationsResponseBody";
export declare class ListApplicationsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListApplicationsResponseBody;
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
