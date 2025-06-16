// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHighDefinitionMonitorLogAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance whose fine-grained monitoring configurations you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * eip-wz9fi6qboho9fwgx7****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance. Set the value to **EIP**.
   * 
   * @example
   * EIP
   */
  instanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

