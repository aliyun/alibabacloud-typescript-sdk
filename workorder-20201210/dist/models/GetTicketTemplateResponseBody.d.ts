import * as $dara from '@darabonba/typescript';
export declare class GetTicketTemplateResponseBody extends $dara.Model {
    accessDeniedDetail?: string;
    code?: number;
    data?: {
        [key: string]: any;
    };
    httpStatusCode?: number;
    message?: string;
    pageNumber?: number;
    pageSize?: number;
    requestId?: string;
    success?: boolean;
    totalCount?: number;
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
