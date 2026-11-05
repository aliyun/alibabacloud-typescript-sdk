import * as $dara from '@darabonba/typescript';
import { QueryRecommendByCodeResponseBody } from "./QueryRecommendByCodeResponseBody";
export declare class QueryRecommendByCodeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: QueryRecommendByCodeResponseBody;
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
