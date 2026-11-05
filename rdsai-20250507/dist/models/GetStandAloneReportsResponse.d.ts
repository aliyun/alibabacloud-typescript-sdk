import * as $dara from '@darabonba/typescript';
import { GetStandAloneReportsResponseBody } from "./GetStandAloneReportsResponseBody";
export declare class GetStandAloneReportsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetStandAloneReportsResponseBody;
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
