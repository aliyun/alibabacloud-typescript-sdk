// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVerifySchemeRequest extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 12345678
   */
  customerId?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The service code.
   * 
   * This parameter is required.
   * 
   * @example
   * FC10000014164****
   */
  schemeCode?: string;
  static names(): { [key: string]: string } {
    return {
      customerId: 'CustomerId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemeCode: 'SchemeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerId: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemeCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

