import * as $dara from '@darabonba/typescript';
import { ListApplicationAssignmentsResponseBody } from "./ListApplicationAssignmentsResponseBody";
export declare class ListApplicationAssignmentsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListApplicationAssignmentsResponseBody;
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
