// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Describe95TrafficRequest extends $dara.Model {
  /**
   * @remarks
   * The date to query, in UTC+8. Format: YYYY-MM-DD.
   * 
   * > You can query only data from last month or earlier.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-10-22
   */
  day?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cbwp-wz9j19xrwf78fvz7*****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the region ID.
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
   * The resource type. Only **cbwp** is supported, which represents Internet Shared Bandwidth.
   * 
   * This parameter is required.
   * 
   * @example
   * cbwp
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

