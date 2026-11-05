import * as $dara from '@darabonba/typescript';
import { UpdatePolarClawCronJobResponseBody } from "./UpdatePolarClawCronJobResponseBody";
export declare class UpdatePolarClawCronJobResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdatePolarClawCronJobResponseBody;
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
