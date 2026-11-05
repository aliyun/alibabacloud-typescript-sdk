import * as $dara from '@darabonba/typescript';
import { GetAppSeoTrendsResponseBody } from "./GetAppSeoTrendsResponseBody";
export declare class GetAppSeoTrendsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAppSeoTrendsResponseBody;
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
