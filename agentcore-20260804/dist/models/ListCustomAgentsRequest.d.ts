import * as $dara from '@darabonba/typescript';
export declare class ListCustomAgentsRequest extends $dara.Model {
    /**
     * @remarks
     * The maximum number of entries to return per page. Valid values: 0 to 100. If this parameter is omitted or set to 0, the default value is 20.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The opaque token used to query the next page. Omit this parameter in the first request. For subsequent requests, use the `nextToken` value returned in the previous response as is, and keep the same workspace. Do not construct this token manually.
     *
     * @example
     * djE6YWdlbnRjb3JlLmFnZW50Lmxpc3QuY3VzdG9tOjIw
     */
    nextToken?: string;
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
