import * as $dara from '@darabonba/typescript';
import { DescribePGHbaConfigResponseBody } from "./DescribePghbaConfigResponseBody";
export declare class DescribePGHbaConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePGHbaConfigResponseBody;
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
