// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The RDS edition of the instance. Valid values:
   * 
   * *   **Basic**: RDS Basic Edition
   * *   **HighAvailability**: RDS High-availability Edition
   * *   **cluster**: RDS Cluster Edition
   * *   **serverless_basic**: RDS Serverless Basic Edition
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
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The connection mode of the instance. Valid values:
   * 
   * *   **Standard**: standard mode
   * *   **Safe**: database proxy mode
   * 
   * By default, this operation queries the instances that use any of the supported connection modes.
   * 
   * @example
   * Standard
   */
  connectionMode?: string;
  /**
   * @remarks
   * The endpoint of the instance. You must specify this parameter only when you want to query a single instance.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The instance type of the instance. For information, see [Primary ApsaraDB RDS instance types](https://help.aliyun.com/document_detail/26312.html).
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
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The status of the instance. For more information, see [Instance states](https://help.aliyun.com/document_detail/26315.html).
   * 
   * @example
   * Running
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The role of the instance. Valid values:
   * 
   * *   **Primary**: primary instance
   * *   **Readonly**: read-only instance
   * *   **Guard**: disaster recovery instance
   * *   **Temp**: temporary instance
   * 
   * By default, this operation returns the instances that assume any of the supported roles.
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
   * dhg-7a9xxxxxxxx
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * The host ID of the instance in the dedicated cluster.
   * 
   * @example
   * i-bpxxxxxxx
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The database engine of the instance. Valid values:
   * 
   * *   **MySQL**
   * *   **SQLServer**
   * *   **PostgreSQL**
   * *   **MariaDB**
   * 
   * By default, this operation returns the instances that run any of the supported database engines.
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
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * Specifies whether the instances have expired. Valid values:
   * 
   * *   **True**
   * *   **False**
   * 
   * @example
   * True
   */
  expired?: string;
  /**
   * @remarks
   * The JSON string that consists of filter condition parameters and their values.
   * 
   * @example
   * {"babelfishEnabled":"true"}
   */
  filter?: string;
  /**
   * @remarks
   * Specifies whether to return the RDS edition of the instance by using the Category parameter. Valid values:
   * 
   * *   **0**: returns the RDS edition of the instance.
   * *   **1**: does not return the RDS edition of the instance.
   * 
   * @example
   * 0
   */
  instanceLevel?: number;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **VPC**
   * *   **Classic**
   * 
   * By default, this operation returns the instances that reside in any of the supported network types.
   * 
   * @example
   * Classic
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The number of entries to return per page. Valid values: **1 to 100**.
   * 
   * Default value: **30**.
   * 
   * > If you specify this parameter, **PageSize** and **PageNumber** are unavailable.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to display the next page. You must set this parameter to the value that is returned from the most recent call of the **DescribeDBInstances** operation for **NextToken**. If the returned entries are displayed on multiple pages, the next page can be displayed when you call this operation again with this parameter specified.
   * 
   * @example
   * o7PORW5o2TJg**********
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from 1.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **100**.
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go
   * *   **Prepaid**: subscription
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmyxxxxx
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The keyword that is used for fuzzy search. The keyword can be part of an instance ID or an instance description.
   * 
   * @example
   * rm-uf6w
   */
  searchKey?: string;
  /**
   * @remarks
   * The tag that is added to the instance. Each tag is a key-value pair that consists of two fields: TagKey and TagValue. You can specify a maximum of five tags in the following format for each request: {"key1":"value1","key2":"value2"...}.
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
   * vsw-uf6adz52c2pxxxxxxxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-uf6f7l4fg90xxxxxxxxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID of the instance.
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

