// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID of the instances.
   * 
   * >Notice: This parameter is deprecated and is not recommended.
   * 
   * @example
   * cls-bp67acfmxazb4p****
   */
  clusterId?: string;
  /**
   * @remarks
   * The instance ID array. Array length: 1 to 100.
   * 
   * Example: ["i-bp1j4i2jdf3owlhe****", "i-bp1j4i2jdf3o1234****"].
   * 
   * @example
   * i-bp1j4i2jdf3owlhe****
   */
  instanceId?: string[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the instance status list.
   * 
   * Minimum value: 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paging. Valid values: 1 to 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instances. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The zone to which the instances belong. You can call [DescribeZones](https://help.aliyun.com/document_detail/25610.html) to query the most recent zone list.
   * 
   * @example
   * cn-hangzhou-d
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

