// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPackageTypeInfoRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The product name. The value must be dytns.
   * 
   * @example
   * dytns
   */
  productName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      productName: 'ProductName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      productName: 'string',
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

