// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecoverCallInConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The China 400 number that is used to transfer the inbound call.
   * 
   * This parameter is required.
   * 
   * @example
   * 400***
   */
  number?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
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

