import * as $dara from '@darabonba/typescript';
export declare class ListCredentialsRequest extends $dara.Model {
    /**
     * @remarks
     * Filters by credential type. Currently, only apiKey is supported.
     *
     * @example
     * apiKey
     */
    credentialType?: string;
    /**
     * @remarks
     * The maximum number of records to return per page. Valid values: 1 to 100. If this parameter is not specified, 10 records are returned by default.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * Filters by credential name.
     *
     * @example
     * credentialxxx
     */
    name?: string;
    /**
     * @remarks
     * The filter condition for fuzzy matching by credential name.
     *
     * @example
     * model
     */
    nameLike?: string;
    /**
     * @remarks
     * The cursor used to query the next page. Do not specify this parameter in the first call. For subsequent calls, specify the nextToken returned in the previous response.
     *
     * @example
     * 10
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
