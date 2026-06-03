// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCommonBillingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  month?: string;
  ownerId?: number;
  prodCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  productType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      month: 'Month',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      productType: 'ProductType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      month: 'string',
      ownerId: 'number',
      prodCode: 'string',
      productType: 'number',
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

