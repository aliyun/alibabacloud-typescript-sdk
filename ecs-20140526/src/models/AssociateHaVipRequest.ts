// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateHaVipRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated token that ensures request idempotency. This token must be unique across requests and can contain only ASCII characters.
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the HaVip.
   * 
   * This parameter is required.
   */
  haVipId?: string;
  /**
   * @remarks
   * The ID of the ECS instance to associate with the HaVip.
   * 
   * This parameter is required.
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the HaVip is located. To obtain the latest list of regions, call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      haVipId: 'HaVipId',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      haVipId: 'string',
      instanceId: 'string',
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

