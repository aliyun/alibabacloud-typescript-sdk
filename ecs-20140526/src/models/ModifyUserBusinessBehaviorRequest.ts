// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserBusinessBehaviorRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  statusKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  statusValue?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      statusKey: 'statusKey',
      statusValue: 'statusValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      statusKey: 'string',
      statusValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

