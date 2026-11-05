import * as $dara from '@darabonba/typescript';
import { DeleteAgenticDBProjectResponseBody } from "./DeleteAgenticDbprojectResponseBody";
export declare class DeleteAgenticDBProjectResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteAgenticDBProjectResponseBody;
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
