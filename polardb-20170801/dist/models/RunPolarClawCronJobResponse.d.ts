import * as $dara from '@darabonba/typescript';
import { RunPolarClawCronJobResponseBody } from "./RunPolarClawCronJobResponseBody";
export declare class RunPolarClawCronJobResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RunPolarClawCronJobResponseBody;
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
