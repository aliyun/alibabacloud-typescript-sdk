import * as $dara from '@darabonba/typescript';
export declare class ListSkillsRequest extends $dara.Model {
    /**
     * @remarks
     * The maximum number of entries to return per page.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The token for the next page.
     *
     * @example
     * next-page-token
     */
    nextToken?: string;
    /**
     * @remarks
     * The field by which to sort the results. Valid value: download_count. Default value: gmt_modified.
     *
     * @example
     * download_count
     */
    orderBy?: string;
    /**
     * @remarks
     * The owner used to filter the results.
     *
     * @example
     * user123
     */
    owner?: string;
    /**
     * @remarks
     * The page number. Default value: 1.
     *
     * @example
     * 1
     */
    pageNo?: number;
    /**
     * @remarks
     * The number of entries per page. Default value: 10. Maximum value: 50.
     *
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * The visibility used to filter the results. Valid values: PUBLIC and PRIVATE.
     *
     * @example
     * PUBLIC
     */
    scope?: string;
    /**
     * @remarks
     * The search mode. Valid values: accurate (exact match) and blur (fuzzy match).
     *
     * @example
     * blur
     */
    search?: string;
    /**
     * @remarks
     * The filter keyword.
     *
     * @example
     * customer
     */
    skillName?: string;
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
