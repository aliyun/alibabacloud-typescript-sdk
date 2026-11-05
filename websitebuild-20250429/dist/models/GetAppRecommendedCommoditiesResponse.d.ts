import * as $dara from '@darabonba/typescript';
import { GetAppRecommendedCommoditiesResponseBody } from "./GetAppRecommendedCommoditiesResponseBody";
export declare class GetAppRecommendedCommoditiesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAppRecommendedCommoditiesResponseBody;
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
