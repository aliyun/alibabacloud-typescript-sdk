// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesForCloneRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxxxxx
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
   * The ID of the current instance.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  currentInstanceId?: string;
  /**
   * @remarks
   * The instance type of the instance. For more information, see [Instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * @example
   * mysql.n1.micro.1
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The status of the instance. For more information, see [Instance state table](https://help.aliyun.com/document_detail/26315.html).
   * 
   * @example
   * Running
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The role of the instance that you want to query. Valid values:
   * 
   * *   **Primary**: primary instance
   * *   **Readonly**: read-only instance
   * *   **Guard**: disaster recovery instance
   * *   **Temp**: temporary instance
   * 
   * By default, this operation queries the instances of all roles.
   * 
   * @example
   * Primary
   */
  DBInstanceType?: string;
  /**
   * @remarks
   * The database engine of the instance. Valid values:
   * 
   * *   MySQL
   * *   SQLServer
   * *   PostgreSQL
   * *   PPAS
   * *   MariaDB
   * 
   * By default, this operation queries the instances that run any of the supported database engine types.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The version of the database engine.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * Specifies whether the instance expires. Valid values:
   * 
   * *   **True**: queries the instances that have expired.
   * *   **False**: does not query instances that have expired.
   * 
   * @example
   * True
   */
  expired?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **Classic**
   * *   **VPC**
   * 
   * @example
   * Classic
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The type of the database node. Valid values:
   * 
   * *   **Master**: the primary node
   * *   **Slave**: the secondary node
   * 
   * @example
   * Master
   */
  nodeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1 to 100**.
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
   * By default, this operation queries the instances that use any of the supported billing methods.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The region ID of the instance.
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
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The keyword that is used for the search. The keyword can be part of an instance ID or an instance description.
   * 
   * @example
   * rm-uf6w
   */
  searchKey?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-j6csw46bgrgkxxxxxxxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-j6cjvqms29yxxxxxxxxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  /**
   * @remarks
   * The ID of the proxy mode.
   * 
   * @example
   * API
   */
  proxyId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      connectionMode: 'ConnectionMode',
      currentInstanceId: 'CurrentInstanceId',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceType: 'DBInstanceType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expired: 'Expired',
      instanceNetworkType: 'InstanceNetworkType',
      nodeType: 'NodeType',
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
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
      proxyId: 'proxyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      connectionMode: 'string',
      currentInstanceId: 'string',
      DBInstanceClass: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      DBInstanceType: 'string',
      engine: 'string',
      engineVersion: 'string',
      expired: 'string',
      instanceNetworkType: 'string',
      nodeType: 'string',
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

