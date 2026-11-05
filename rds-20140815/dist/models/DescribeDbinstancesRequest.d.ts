import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstancesRequest extends $dara.Model {
    /**
     * @remarks
     * The instance series. Valid values:
     * - **Basic**: Basic Edition
     * - **HighAvailability**: high availability series
     * - **cluster**: Cluster Edition
     * - **serverless_basic**: Serverless
     *
     * @example
     * cluster
     */
    category?: string;
    /**
     * @remarks
     * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can generate the value of this parameter on the client side. The value must be unique across different requests and can be up to 64 ASCII characters in length. The value cannot contain non-ASCII characters.
     *
     * @example
     * ETnLKlblzczshOTUbOCz****
     */
    clientToken?: string;
    /**
     * @remarks
     * The access mode of the instance. Valid values:
     * * **Standard**: standard access mode
     * * **Safe**: database proxy mode
     *
     * By default, instances of all access modes are returned.
     *
     * @example
     * Standard
     */
    connectionMode?: string;
    /**
     * @remarks
     * The endpoint of the instance. You can use the endpoint to query the corresponding instance.
     *
     * @example
     * rm-uf6wjk5****.mysql.rds.aliyuncs.com
     */
    connectionString?: string;
    /**
     * @remarks
     * The instance type. For more information, see [Instance types](https://help.aliyun.com/document_detail/26312.html).
     *
     * @example
     * rds.mys2.small
     */
    DBInstanceClass?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The instance status. For more information, see [Instance statuses](https://help.aliyun.com/document_detail/26315.html).
     *
     * @example
     * Running
     */
    DBInstanceStatus?: string;
    /**
     * @remarks
     * The instance type. Valid values:
     * * **Primary**: primary instance
     * * **Readonly**: read-only instance
     * * **Guard**: disaster recovery instance
     * * **Temp**: temporary instance
     *
     * By default, instances of all types are returned.
     *
     * @example
     * Primary
     */
    DBInstanceType?: string;
    /**
     * @remarks
     * The dedicated cluster ID.
     *
     * @example
     * dhg-7a9****
     */
    dedicatedHostGroupId?: string;
    /**
     * @remarks
     * The host ID in the dedicated cluster.
     *
     * @example
     * i-bp****
     */
    dedicatedHostId?: string;
    /**
     * @remarks
     * The database engine. Valid values:
     * * **MySQL**
     * * **SQLServer**
     * * **PostgreSQL**
     * * **MariaDB**
     *
     * By default, instances of all database engines are returned.
     *
     * @example
     * MySQL
     */
    engine?: string;
    /**
     * @remarks
     * The database engine version.
     *
     * @example
     * 8.0
     */
    engineVersion?: string;
    /**
     * @remarks
     * The expiration status of the instance. Valid values:
     * * **True**: The instance has expired.
     * * **False**: The instance has not expired.
     *
     * @example
     * True
     */
    expired?: string;
    /**
     * @remarks
     * The JSON string of instance filter parameters and their values.
     *
     * @example
     * {"babelfishEnabled":"true"}
     */
    filter?: string;
    /**
     * @remarks
     * Specifies whether to return the instance edition information. Valid values:
     * * **0**: no
     * * **1**: yes
     *
     * @example
     * 0
     */
    instanceLevel?: number;
    /**
     * @remarks
     * The network type of the instance. Valid values:
     * * **VPC**: VPC
     * * **Classic**: classic network
     *
     * By default, instances of all network types are returned.
     *
     * @example
     * Classic
     */
    instanceNetworkType?: string;
    /**
     * @remarks
     * The maximum number of entries per page. Valid values: **1** to **100**.
     *
     * Default value: **30**.
     * > If you specify this parameter, the **PageSize** and **PageNumber** parameters become invalid.
     *
     * @example
     * 30
     */
    maxResults?: number;
    /**
     * @remarks
     * The pagination token. The value is the **NextToken** parameter value returned from the previous call to the **DescribeDBInstances** operation. If the results are displayed across multiple pages, you can pass this value in the next call to display the next page.
     *
     * @example
     * o7PORW5o2TJg****
     */
    nextToken?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The page number. Valid values: any integer greater than 0 and less than or equal to the maximum value of the Integer type.
     *
     * Default value: **1**.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page. Valid values: **1** to **100**.
     *
     * Default value: **30**.
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The billing method. Valid values:
     * * **Postpaid**: pay-as-you-go
     * * **Prepaid**: subscription
     *
     * @example
     * Postpaid
     */
    payType?: string;
    /**
     * @remarks
     * Reserved parameter. You do not need to configure this parameter.
     *
     * @example
     * test
     */
    queryAutoRenewal?: boolean;
    /**
     * @remarks
     * The region ID. You can call the DescribeRegions operation to obtain the region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The resource group ID.
     *
     * @example
     * rg-acfmy****
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The search key. You can perform a fuzzy search based on the instance ID or instance description.
     *
     * @example
     * rm-uf6w
     */
    searchKey?: string;
    /**
     * @remarks
     * The tags that are added to the instances to be queried, including TagKey and TagValue. You can specify up to 5 tags in a single request. Format: {"key1":"value1","key2":"value2"...}. If an instance matches any of the specified tags, the instance information is returned.
     *
     * @example
     * {"key1":"value1"}
     */
    tags?: string;
    /**
     * @remarks
     * The vSwitch ID.
     *
     * @example
     * vsw-uf6adz52c2p****
     */
    vSwitchId?: string;
    /**
     * @remarks
     * The VPC ID.
     *
     * @example
     * vpc-uf6f7l4fg90****
     */
    vpcId?: string;
    /**
     * @remarks
     * The zone ID.
     *
     * @example
     * cn-hangzhou-a
     */
    zoneId?: string;
    /**
     * @remarks
     * **[Deprecated]** You do not need to configure this parameter.
     *
     * @example
     * API
     */
    proxyId?: string;
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
