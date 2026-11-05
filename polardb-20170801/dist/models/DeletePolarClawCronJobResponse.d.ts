import * as $dara from '@darabonba/typescript';
import { DeletePolarClawCronJobResponseBody } from "./DeletePolarClawCronJobResponseBody";
export declare class DeletePolarClawCronJobResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeletePolarClawCronJobResponseBody;
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
