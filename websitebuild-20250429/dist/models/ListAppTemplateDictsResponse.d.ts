import * as $dara from '@darabonba/typescript';
import { ListAppTemplateDictsResponseBody } from "./ListAppTemplateDictsResponseBody";
export declare class ListAppTemplateDictsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListAppTemplateDictsResponseBody;
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
