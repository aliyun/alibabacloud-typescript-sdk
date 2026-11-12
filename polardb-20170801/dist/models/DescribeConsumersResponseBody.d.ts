import * as $dara from '@darabonba/typescript';
export declare class DescribeConsumersResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The list of supported models.
     *
     * @example
     * "[]"
     */
    allowedModels?: string;
    /**
     * @remarks
     * The complete API key. This value is returned only in the current response.
     *
     * @example
     * ak_example_7f3d9c2a
     */
    apiKey?: string;
    /**
     * @remarks
     * The consumer group ID.
     *
     * @example
     * cg-xxxxxx
     */
    consumerGroupId?: string;
    /**
     * @remarks
     * The consumer group name.
     *
     * @example
     * test
     */
    consumerGroupName?: string;
    /**
     * @remarks
     * The consumer ID.
     *
     * @example
     * c-mqveroemc***
     */
    consumerId?: string;
    /**
     * @remarks
     * The creation time.
     *
     * @example
     * 2026-01-28T09:56:03+08:00
     */
    gmtCreated?: string;
    /**
     * @remarks
     * The update time.
     *
     * @example
     * 2026-01-04T16:09:29+08:00
     */
    gmtModified?: string;
    /**
     * @remarks
     * The cumulative usage.
     *
     * @example
     * 1000
     */
    lifetimeCostCount?: number;
    /**
     * @remarks
     * The total cost for the current month.
     *
     * @example
     * 100
     */
    lifetimeTokenCount?: number;
    /**
     * @remarks
     * The usage for the current month.
     *
     * @example
     * 10
     */
    mtdCostCount?: number;
    /**
     * @remarks
     * The cumulative cost.
     *
     * @example
     * 10000
     */
    mtdTokenCount?: number;
    /**
     * @remarks
     * The consumer name.
     *
     * @example
     * test
     */
    name?: string;
    /**
     * @remarks
     * The nickname of the consumer.
     *
     * @example
     * yonghu
     */
    nickName?: string;
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
export declare class DescribeConsumersResponseBody extends $dara.Model {
    /**
     * @remarks
     * The consumer list.
     */
    items?: DescribeConsumersResponseBodyItems[];
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries on the current page.
     *
     * @example
     * 1
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The number of entries per page. Valid values: 30, 50, and 100. Default value: 30.
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 24A1990B-4F6E-482B-B8CB-75C612******
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 1
     */
    totalRecordCount?: number;
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
