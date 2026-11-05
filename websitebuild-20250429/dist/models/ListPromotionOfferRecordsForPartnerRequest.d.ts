import * as $dara from '@darabonba/typescript';
export declare class ListPromotionOfferRecordsForPartnerRequest extends $dara.Model {
    /**
     * @remarks
     * The activity code.
     *
     * @example
     * acwfradoj5u
     */
    activityCode?: string;
    /**
     * @remarks
     * The belonging ID.
     *
     * @example
     * 123456
     */
    belongId?: string;
    /**
     * @remarks
     * The number of entries per query.
     *
     * Valid values: 10 to 100. Default value: 20.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The token for the next query. This parameter is empty if no more results exist.
     *
     * @example
     * test
     */
    nextToken?: string;
    /**
     * @remarks
     * The field used for sorting.
     *
     * @example
     * gmtCreated
     */
    orderColumn?: string;
    /**
     * @remarks
     * The sort type. Valid values: ASC and DESC.
     *
     * @example
     * BUY
     */
    orderType?: string;
    /**
     * @remarks
     * The page number. Default value: 1.
     *
     * @example
     * 1
     */
    pageNum?: number;
    /**
     * @remarks
     * The number of entries per page. Default value: 10.
     *
     * @example
     * 10
     */
    pageSize?: number;
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
