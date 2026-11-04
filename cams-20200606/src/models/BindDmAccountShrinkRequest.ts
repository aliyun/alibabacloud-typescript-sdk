// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindDmAccountShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The account code.
   * 
   * This parameter is required.
   * 
   * @example
   * Sample value
   */
  accountCode?: string;
  /**
   * @remarks
   * The space ID of the ISV sub-customer.
   * 
   * This parameter is required.
   * 
   * @example
   * Sample value
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The extended attributes.
   * 
   * This parameter is required.
   */
  extendAttrShrink?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountCode: 'AccountCode',
      custSpaceId: 'CustSpaceId',
      extendAttrShrink: 'ExtendAttr',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountCode: 'string',
      custSpaceId: 'string',
      extendAttrShrink: 'string',
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

