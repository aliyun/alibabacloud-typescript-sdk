// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAIServiceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  operation?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  types?: string;
  static names(): { [key: string]: string } {
    return {
      operation: 'Operation',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      types: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

