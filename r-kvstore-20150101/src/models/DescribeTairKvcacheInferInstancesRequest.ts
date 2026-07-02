// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTairKVCacheInferInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. The key and value of a tag form a key-value pair.
   * > You can specify up to 5 key-value pairs of tags in a single request.
   * 
   * @example
   * key1_test
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * > **N** specifies the sequence number of the tag. For example, **Tag.1.Value** specifies the value of the first tag, and **Tag.2.Value** specifies the value of the second tag.
   * 
   * @example
   * testvalue
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

export class DescribeTairKVCacheInferInstancesRequest extends $dara.Model {
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
   * The expiration status of the instance. Valid values:
   * 
   * * **true**: expired.
   * * **false**: not expired.
   * 
   * @example
   * false
   */
  expired?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * kvcache.cu.g4c.2
   */
  instanceClass?: string;
  /**
   * @remarks
   * The IDs of the instances that you want to query.
   * > To specify multiple instance IDs, separate them with commas (,). You can specify up to 30 instance IDs in a single request.
   * 
   * @example
   * tk-2zefe7728c2c****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * * **Normal**: Normal.
   * * **Creating**: The instance is being created.
   * 
   * > For more information about instance statuses, see [Instance states and impacts](https://help.aliyun.com/document_detail/200740.html).
   * 
   * @example
   * Normal
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * * **VPC**: virtual private cloud (VPC). This is the default value.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value starts from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The private IP address in the VPC. This parameter is deprecated.
   * 
   * @example
   * 172.16.49.***
   */
  privateIp?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. This parameter can be left empty.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The keyword used for fuzzy search by instance name or instance ID.
   * 
   * @example
   * apitest
   */
  searchKey?: string;
  securityToken?: string;
  /**
   * @remarks
   * The tags of the instance.
   */
  tag?: DescribeTairKVCacheInferInstancesRequestTag[];
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1nme44gek34slfc****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      expired: 'Expired',
      instanceClass: 'InstanceClass',
      instanceIds: 'InstanceIds',
      instanceStatus: 'InstanceStatus',
      networkType: 'NetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      privateIp: 'PrivateIp',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      searchKey: 'SearchKey',
      securityToken: 'SecurityToken',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      expired: 'string',
      instanceClass: 'string',
      instanceIds: 'string',
      instanceStatus: 'string',
      networkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      privateIp: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      searchKey: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': DescribeTairKVCacheInferInstancesRequestTag },
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

