// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDefaultTemplateGroupConsoleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  groupId?: string;
  groupSymbol?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupSymbol: 'GroupSymbol',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupSymbol: 'string',
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

