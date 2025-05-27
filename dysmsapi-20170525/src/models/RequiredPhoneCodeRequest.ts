// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RequiredPhoneCodeRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 137****1234
   */
  phoneNo?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      phoneNo: 'PhoneNo',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      phoneNo: 'string',
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

