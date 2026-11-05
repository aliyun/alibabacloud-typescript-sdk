import * as $dara from '@darabonba/typescript';
import { ListAppTemplatesResponseBody } from "./ListAppTemplatesResponseBody";
export declare class ListAppTemplatesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListAppTemplatesResponseBody;
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
