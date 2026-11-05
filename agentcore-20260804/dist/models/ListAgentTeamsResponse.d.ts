import * as $dara from '@darabonba/typescript';
import { ListAgentTeamsResponseBody } from "./ListAgentTeamsResponseBody";
export declare class ListAgentTeamsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListAgentTeamsResponseBody;
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
