// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReceiverRequest extends $dara.Model {
  /**
   * @remarks
   * List description.
   * 
   * @example
   * the description
   */
  desc?: string;
  ownerId?: number;
  /**
   * @remarks
   * List alias, an email address less than 30 characters long.
   * 
   * This parameter is required.
   * 
   * @example
   * a***@example.net
   */
  receiversAlias?: string;
  /**
   * @remarks
   * List name, must be unique, with a length of 1-30 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  receiversName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      ownerId: 'OwnerId',
      receiversAlias: 'ReceiversAlias',
      receiversName: 'ReceiversName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      ownerId: 'number',
      receiversAlias: 'string',
      receiversName: 'string',
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

