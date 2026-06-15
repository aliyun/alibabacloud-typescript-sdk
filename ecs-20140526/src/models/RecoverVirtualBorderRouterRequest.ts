// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecoverVirtualBorderRouterRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated token that must be unique across requests to ensure idempotency. The token can contain only ASCII characters and must be no longer than 64 characters.
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the VBR is located. You can call the `DescribeRegions` operation to get the latest region list.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The secondary IPv4 CIDR block of your on-premises data center. This parameter is used for disaster recovery in a dual-homed configuration.
   */
  userCidr?: string;
  /**
   * @remarks
   * The ID of the VBR to recover.
   * 
   * This parameter is required.
   */
  vbrId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userCidr: 'UserCidr',
      vbrId: 'VbrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      userCidr: 'string',
      vbrId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

