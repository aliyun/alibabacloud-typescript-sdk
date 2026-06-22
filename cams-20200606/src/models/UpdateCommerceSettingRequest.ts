// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCommerceSettingRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the shopping cart. Valid values:
   * 
   * - true: Enable the shopping cart.
   * 
   * - false: Disable the shopping cart.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  cartEnable?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the product catalog. Valid values:
   * 
   * - true: Enable the product catalog.
   * 
   * - false: Disable the product catalog.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  catalogVisible?: boolean;
  /**
   * @remarks
   * The Space ID of the Independent Software Vendor (ISV) sub-customer.
   * 
   * This parameter is required.
   * 
   * @example
   * 29348393884****
   */
  custSpaceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1380000****
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cartEnable: 'CartEnable',
      catalogVisible: 'CatalogVisible',
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cartEnable: 'boolean',
      catalogVisible: 'boolean',
      custSpaceId: 'string',
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

