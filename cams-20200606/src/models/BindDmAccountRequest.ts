// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindDmAccountRequestExtendAttr extends $dara.Model {
  /**
   * @remarks
   * The account name.
   * 
   * This parameter is required.
   * 
   * @example
   * Sample value
   */
  accountName?: string;
  /**
   * @remarks
   * The send type.
   * 
   * This parameter is required.
   * 
   * @example
   * Sample value
   */
  sendType?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      sendType: 'SendType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      sendType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindDmAccountRequest extends $dara.Model {
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
  extendAttr?: BindDmAccountRequestExtendAttr;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountCode: 'AccountCode',
      custSpaceId: 'CustSpaceId',
      extendAttr: 'ExtendAttr',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountCode: 'string',
      custSpaceId: 'string',
      extendAttr: BindDmAccountRequestExtendAttr,
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(this.extendAttr && typeof (this.extendAttr as any).validate === 'function') {
      (this.extendAttr as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

