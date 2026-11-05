import * as $dara from '@darabonba/typescript';
import { ListTeamsResponseBody } from "./ListTeamsResponseBody";
export declare class ListTeamsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListTeamsResponseBody;
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
