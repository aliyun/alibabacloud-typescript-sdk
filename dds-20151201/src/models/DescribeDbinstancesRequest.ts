// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance. Valid values of N: **1** to **20**.
   * 
   * - The tag key cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * - The tag key can be up to 64 characters in length.
   * - The tag key cannot be an empty string.
   * 
   * @example
   * testdatabase
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance. Valid values of N: **1** to **20**.
   * 
   * - The tag value cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * - The tag value can be up to 128 characters in length.
   * - The tag value can be an empty string.
   * 
   * @example
   * apitest
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * - **PrePaid**: subscription.
   * - **PostPaid**: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The endpoint of the node. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to query the endpoint.
   * 
   * @example
   * dds-bp1ea17b41abecf43****.mongodb.rds.aliyuncs.com
   */
  connectionDomain?: string;
  /**
   * @remarks
   * The instance specification. For more information about valid values, see [Instance specifications](https://help.aliyun.com/document_detail/57141.html).
   * 
   * @example
   * dds.mongo.mid
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance name. The name must meet the following requirements:
   * 
   * - It must start with a Chinese character or a letter.
   * - It can contain digits, Chinese characters, letters, underscores (_), and hyphens (-).
   * - It must be 2 to 256 characters in length.
   * 
   * @example
   * TestDatabase
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dds-bp199659b178****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The instance status. For more details about valid values, see [Instance status table](https://help.aliyun.com/document_detail/63870.html).
   * 
   * @example
   * Running
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The instance type. Valid values: 
   * - **sharding**: sharded cluster instance.
   * - **replicate**: default value. Replica set instance or single-node instance.
   *  <props="china">
   * - **serverless**: Serverless instance.
   * 
   * @example
   * sharding
   */
  DBInstanceType?: string;
  /**
   * @remarks
   * Specifies whether to filter standard or test instances.
   * 
   * 1. Single-node instances and DBFS instances: customized
   * 2. Standard instances (replica set and sharded cluster): standard
   * 3. Default (displays all instances): default
   * 
   * @example
   * default
   */
  DBNodeType?: string;
  /**
   * @remarks
   * The database engine. Set the value to **MongoDB**.
   * 
   * @example
   * MongoDB
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version. Valid values:
   * - **7.0**
   * - **6.0**
   * - **5.0**
   * - **4.4**
   * - **4.2**
   * - **4.0**
   * - **3.4**
   * 
   * @example
   * 4.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The expiration time of the instance in the yyyy-MM-ddTHH:mm:ssZ format (UTC). This parameter is used to filter instances whose expiration time is earlier than or equal to the specified time.
   * 
   * @example
   * 2019-12-26T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The expiration status of the instance. Valid values:
   * - **true**: expired.
   * - **false**: not expired.
   * 
   * @example
   * true
   */
  expired?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * - **Classic**: classic network.
   * - **VPC**: VPC.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be a positive integer that does not exceed the maximum value of the Integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - **30** (default)
   * - **50**
   * - **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of nodes in the replica set instance. Valid values:
   * 
   * - **3**
   * - **5**
   * - **7**
   * 
   * @example
   * 3
   */
  replicationFactor?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   */
  tag?: DescribeDBInstancesRequestTag[];
  /**
   * @remarks
   * The vSwitch ID of the VPC.
   * 
   * @example
   * vsw-bp1vj604nj5a9zz74****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1n3i15v90el48nx****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the zone ID.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      connectionDomain: 'ConnectionDomain',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceType: 'DBInstanceType',
      DBNodeType: 'DBNodeType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      networkType: 'NetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      replicationFactor: 'ReplicationFactor',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      connectionDomain: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      DBInstanceType: 'string',
      DBNodeType: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      expired: 'string',
      networkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      replicationFactor: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeDBInstancesRequestTag },
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

