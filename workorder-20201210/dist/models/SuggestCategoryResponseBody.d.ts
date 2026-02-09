import * as $dara from '@darabonba/typescript';
export declare class SuggestCategoryResponseBody extends $dara.Model {
    accessDeniedDetail?: string;
    code?: string;
    data?: {
        [key: string]: any;
    }[];
    httpStatusCode?: number;
    message?: string;
    requestId?: string;
    success?: boolean;
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
