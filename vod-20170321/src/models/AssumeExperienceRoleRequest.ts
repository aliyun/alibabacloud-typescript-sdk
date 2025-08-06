// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssumeExperienceRoleRequest extends $dara.Model {
  cookie?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  data?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      data: 'Data',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      data: 'string',
      ownerId: 'number',
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

