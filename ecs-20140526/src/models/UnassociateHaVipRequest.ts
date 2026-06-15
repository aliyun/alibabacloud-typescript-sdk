// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnassociateHaVipRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated token that ensures request idempotency. The token must be unique for each request, contain only ASCII characters, and be no more than 64 characters long.
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to forcefully disassociate the HaVip. If you set this parameter to `true`, you can disassociate the HaVip from a master instance. Valid values: `true` and `false`. The default value is `false`.
   */
  force?: string;
  /**
   * @remarks
   * The ID of the HaVip.
   * 
   * This parameter is required.
   */
  haVipId?: string;
  /**
   * @remarks
   * The ID of the ECS instance to disassociate the HaVip from.
   * 
   * This parameter is required.
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the HaVip is deployed. You can call the `DescribeRegions` operation to query the latest region list.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      force: 'Force',
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
      force: 'string',
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

