import * as $dara from '@darabonba/typescript';
import { SetDefaultDomainResponseBody } from "./SetDefaultDomainResponseBody";
export declare class SetDefaultDomainResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SetDefaultDomainResponseBody;
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
