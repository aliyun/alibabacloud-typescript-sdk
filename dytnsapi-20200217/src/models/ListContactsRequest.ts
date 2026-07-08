// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContactsRequest extends $dara.Model {
  /**
   * @remarks
   * The business type. Set the value to `dytns`.
   * 
   * @example
   * dytns
   */
  bizType?: string;
  /**
   * @remarks
   * The contact ID.
   * 
   * @example
   * 1298647
   */
  contactId?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      contactId: 'ContactId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      contactId: 'number',
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

