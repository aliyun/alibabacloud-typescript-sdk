// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateEipAddressRequest extends $dara.Model {
  activityId?: number;
  bandwidth?: string;
  clientToken?: string;
  ISP?: string;
  internetChargeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      ISP: 'ISP',
      internetChargeType: 'InternetChargeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      bandwidth: 'string',
      clientToken: 'string',
      ISP: 'string',
      internetChargeType: 'string',
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

