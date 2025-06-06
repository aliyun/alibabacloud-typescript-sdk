// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecretAPhoneNoToCustRequest extends $dara.Model {
  /**
   * @remarks
   * A号码组ID
   * 
   * This parameter is required.
   * 
   * @example
   * 51
   */
  ANoWhiteGroupId?: number;
  ownerId?: number;
  /**
   * @remarks
   * A号码
   * 
   * This parameter is required.
   * 
   * @example
   * 130*****1234
   */
  phoneNoA?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ANoWhiteGroupId: 'ANoWhiteGroupId',
      ownerId: 'OwnerId',
      phoneNoA: 'PhoneNoA',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ANoWhiteGroupId: 'number',
      ownerId: 'number',
      phoneNoA: 'string',
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

