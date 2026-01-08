// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindDmAccountShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  accountCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  custSpaceId?: string;
  /**
   * @remarks
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

