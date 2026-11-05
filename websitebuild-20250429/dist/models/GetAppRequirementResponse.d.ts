import * as $dara from '@darabonba/typescript';
import { GetAppRequirementResponseBody } from "./GetAppRequirementResponseBody";
export declare class GetAppRequirementResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAppRequirementResponseBody;
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
