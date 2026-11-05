import * as $dara from '@darabonba/typescript';
import { CreatePolarClawCronJobResponseBody } from "./CreatePolarClawCronJobResponseBody";
export declare class CreatePolarClawCronJobResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreatePolarClawCronJobResponseBody;
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
