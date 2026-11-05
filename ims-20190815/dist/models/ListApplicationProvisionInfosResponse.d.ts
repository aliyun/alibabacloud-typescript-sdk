import * as $dara from '@darabonba/typescript';
import { ListApplicationProvisionInfosResponseBody } from "./ListApplicationProvisionInfosResponseBody";
export declare class ListApplicationProvisionInfosResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListApplicationProvisionInfosResponseBody;
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
