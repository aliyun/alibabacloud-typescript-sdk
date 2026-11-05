import * as $dara from '@darabonba/typescript';
import { DisablePolarClawCronJobResponseBody } from "./DisablePolarClawCronJobResponseBody";
export declare class DisablePolarClawCronJobResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DisablePolarClawCronJobResponseBody;
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
