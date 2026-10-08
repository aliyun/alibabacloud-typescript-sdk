// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance edition. Valid values:
   * - **Basic**: Basic Edition
   * - **HighAvailability**: High-availability Edition
   * - **cluster**: Cluster Edition
   * - **serverless_basic**: Serverless
   * 
   * @example
   * cluster
   */
  category?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
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
   * By default, instances in all access modes are returned.
   * 
   * @example
   * Standard
   */
  connectionMode?: string;
  /**
   * @remarks
   * The endpoint of the instance. Use this endpoint to query the corresponding instance.
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
   * The instance status. For more information, see [Instance states](https://help.aliyun.com/document_detail/26315.html).
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
   * The JSON string that contains the instance filter conditions and their values.
   * 
   * @example
   * {"babelfishEnabled":"true"}
   */
  filter?: string;
  /**
   * @remarks
   * Specifies whether to return the instance edition (Category) information. Valid values:
   * * **0**: does not return the information
   * * **1**: returns the information
   * 
   * @example
   * 0
   */
  instanceLevel?: number;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * * **VPC**: an instance in a virtual private cloud (VPC)
   * * **Classic**: an instance in the classic network
   * 
   * By default, instances of all network types are returned.
   * 
   * @example
   * Classic
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1** to **100**.
   * 
   * Default value: **30**.
   * >If you specify this parameter, the **PageSize** and **PageNumber** parameters are unavailable.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the value of **NextToken** that is returned from the last call to the **DescribeDBInstances** operation. If the results span multiple pages, pass in this value to retrieve the next page.
   * 
   * @example
   * o7PORW5o2TJg****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Valid values: any value greater than 0 that does not exceed the maximum value of Integer.
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
   * A reserved parameter. You do not need to configure this parameter.
   * 
   * @example
   * test
   */
  queryAutoRenewal?: boolean;
  /**
   * @remarks
   * The region ID. You can call DescribeRegions to query the available regions.
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
   * The keyword for fuzzy search based on the instance ID or instance description.
   * 
   * @example
   * rm-uf6w
   */
  searchKey?: string;
  /**
   * @remarks
   * The tags that are bound to the instance, including TagKey and TagValue. You can specify up to five pairs of tags at a time. Format: {"key1":"value1","key2":"value2"...}. If the instance matches any of the specified tags, the instance information is returned.
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
   * VPC ID。
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
   * A deprecated parameter. You do not need to configure this parameter.
   * 
   * @example
   * API
   */
  proxyId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      clientToken: 'ClientToken',
      connectionMode: 'ConnectionMode',
      connectionString: 'ConnectionString',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceType: 'DBInstanceType',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      dedicatedHostId: 'DedicatedHostId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expired: 'Expired',
      filter: 'Filter',
      instanceLevel: 'InstanceLevel',
      instanceNetworkType: 'InstanceNetworkType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      payType: 'PayType',
      queryAutoRenewal: 'QueryAutoRenewal',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      searchKey: 'SearchKey',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
      proxyId: 'proxyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      clientToken: 'string',
      connectionMode: 'string',
      connectionString: 'string',
      DBInstanceClass: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      DBInstanceType: 'string',
      dedicatedHostGroupId: 'string',
      dedicatedHostId: 'string',
      engine: 'string',
      engineVersion: 'string',
      expired: 'string',
      filter: 'string',
      instanceLevel: 'number',
      instanceNetworkType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      payType: 'string',
      queryAutoRenewal: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      searchKey: 'string',
      tags: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
      proxyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

