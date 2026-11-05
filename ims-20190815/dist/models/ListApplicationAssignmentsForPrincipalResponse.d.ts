import * as $dara from '@darabonba/typescript';
import { ListApplicationAssignmentsForPrincipalResponseBody } from "./ListApplicationAssignmentsForPrincipalResponseBody";
export declare class ListApplicationAssignmentsForPrincipalResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListApplicationAssignmentsForPrincipalResponseBody;
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
