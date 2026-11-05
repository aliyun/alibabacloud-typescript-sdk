import * as $dara from '@darabonba/typescript';
import { DescribePolarClawPluginsResponseBody } from "./DescribePolarClawPluginsResponseBody";
export declare class DescribePolarClawPluginsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePolarClawPluginsResponseBody;
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
