import * as $dara from '@darabonba/typescript';
export declare class DescribeColdStorageInstanceRequest extends $dara.Model {
    /**
     * @remarks
     * The PolarDB cluster ID.
     *
     * @example
     * pc-wz9062015ly7526jc
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The name of the database.
     *
     * @example
     * test_db
     */
    DBName?: string;
    /**
     * @remarks
     * The supported engine types. The return value is the sum of the following engine type values:
     *
     * - 1: Search engine
     * - 2: Time series engine
     * - 4: Wide table engine
     * - 8: File engine
     *
     * > For example, if the EngineType value is 15, 15 = 8 + 4 + 2 + 1, which indicates that the instance supports the search engine, time series engine, wide table engine, and file engine. If the EngineType value is 6, 6 = 4 + 2, which indicates that the instance supports the time series engine and wide table engine.
     *
     * @example
     * 2
     */
    engineType?: string;
    /**
     * @remarks
     * The validity period of the download URL, in seconds. If you query the download URL of a specified data table and do not specify this parameter, the default value is 3600.
     *
     * @example
     * 3600
     */
    expireTime?: number;
    /**
     * @remarks
     * - If you do not specify the **MaxResults** parameter, it indicates that you do not need to query in batches. The value of the **MaxResults** parameter returned in the response indicates the total number of entries.
     * - If you specify the **MaxResults** parameter, it indicates that you need to query in batches. The value of **MaxResults** indicates the number of entries to return per batch. Valid values: **1** to **100**. The value of the **MaxResults** parameter returned in the response indicates the number of entries in the current batch. We recommend that you set the **MaxResults** parameter to **20**.
     *
     * @example
     * 50
     */
    maxResults?: number;
    /**
     * @remarks
     * The query token. Set the value to the NextToken value returned from the previous API call. If there are no more queries, do not specify this parameter.
     *
     * @example
     * c2FpXzIwMjIwNjI5X2Jhay9zYWlfc3VtbWVyX3RyZWFzdXJlX3Bvb2xfbG9nLkNTVg==
     */
    nextToken?: string;
    /**
     * @remarks
     * The object type. Valid values: TABLE, PARTITION_TABLE, and LOB.
     *
     * @example
     * TABLE
     */
    objectType?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: string;
    /**
     * @remarks
     * The number of entries per page.
     *
     * @example
     * 1
     */
    pageSize?: string;
    /**
     * @remarks
     * The region ID.
     * > * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to view the region information of all clusters under the target account.
     * * If you leave this parameter empty, scheduled tasks in all regions of the current account are queried by default.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The name of the data table.
     *
     * @example
     * account_log
     */
    tableName?: string;
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
