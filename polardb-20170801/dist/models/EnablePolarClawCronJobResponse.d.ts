import * as $dara from '@darabonba/typescript';
import { EnablePolarClawCronJobResponseBody } from "./EnablePolarClawCronJobResponseBody";
export declare class EnablePolarClawCronJobResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: EnablePolarClawCronJobResponseBody;
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
