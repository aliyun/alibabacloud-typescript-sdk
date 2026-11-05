import * as $dara from '@darabonba/typescript';
import { CreateAgenticDBProjectResponseBody } from "./CreateAgenticDbprojectResponseBody";
export declare class CreateAgenticDBProjectResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateAgenticDBProjectResponseBody;
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
