import * as $dara from '@darabonba/typescript';
export declare class DescribeGatewayApikeyListResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The API key used.
     *
     * @example
     * 6c4b1f0317cd4fd7a5b446d3503d**
     */
    apiKey?: string;
    /**
     * @remarks
     * The user group ID.
     *
     * @example
     * cg-xxxxxx
     */
    consumerGroupId?: string;
    /**
     * @remarks
     * The user ID.
     *
     * @example
     * c-mqveroemc***
     */
    consumerId?: string;
    /**
     * @remarks
     * The consumer tag.
     *
     * @example
     * test
     */
    consumerTag?: string;
    /**
     * @remarks
     * The creation time. The time follows the ISO 8601 standard in UTC (YYYY-MM-DDTHH:mm:ssZ).
     *
     * @example
     * 2020-08-14T05:58:42Z
     */
    createTime?: string;
    /**
     * @remarks
     * The gateway instance ID.
     *
     * @example
     * pg-xxxxxxxx
     */
    gwClusterId?: string;
    /**
     * @remarks
     * The last modification time. The time follows the ISO 8601 standard in UTC (YYYY-MM-DDTHH:mm:ssZ).
     *
     * @example
     * 2024-10-29T09:31:37Z
     */
    modifyTime?: string;
    /**
     * @remarks
     * The username.
     *
     * @example
     * test
     */
    name?: string;
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
export declare class DescribeGatewayApikeyListResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of consumer objects.
     */
    items?: DescribeGatewayApikeyListResponseBodyItems[];
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
     * The number of records on the current page.
     *
     * @example
     * 1
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The number of entries per page. Valid values:
     * * **30**
     * * **50**
     * * **100**
     *
     * Default value: 30.
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
     * A0450B18-BBD4-5DF9-8E71-610F1A921CDE
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of pages.
     *
     * @example
     * 1
     */
    totalPages?: number;
    /**
     * @remarks
     * The total number of records.
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
