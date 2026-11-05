import * as $dara from '@darabonba/typescript';
import { CreateDistributionResponseBody } from "./CreateDistributionResponseBody";
export declare class CreateDistributionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateDistributionResponseBody;
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
