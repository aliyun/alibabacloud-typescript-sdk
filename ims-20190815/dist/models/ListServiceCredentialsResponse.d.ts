import * as $dara from '@darabonba/typescript';
import { ListServiceCredentialsResponseBody } from "./ListServiceCredentialsResponseBody";
export declare class ListServiceCredentialsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListServiceCredentialsResponseBody;
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
