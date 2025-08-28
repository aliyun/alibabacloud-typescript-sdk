// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCallInPoolTransferConfigRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The China 400 number used to transfer the call.
   * 
   * This parameter is required.
   * 
   * @example
   * 400****
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      phoneNumber: 'string',
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

