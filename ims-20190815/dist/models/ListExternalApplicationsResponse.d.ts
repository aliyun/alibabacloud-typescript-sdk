import * as $dara from '@darabonba/typescript';
import { ListExternalApplicationsResponseBody } from "./ListExternalApplicationsResponseBody";
export declare class ListExternalApplicationsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListExternalApplicationsResponseBody;
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
