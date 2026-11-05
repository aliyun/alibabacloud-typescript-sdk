import * as $dara from '@darabonba/typescript';
import { ListAppDomainRedirectRecordsResponseBody } from "./ListAppDomainRedirectRecordsResponseBody";
export declare class ListAppDomainRedirectRecordsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListAppDomainRedirectRecordsResponseBody;
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
