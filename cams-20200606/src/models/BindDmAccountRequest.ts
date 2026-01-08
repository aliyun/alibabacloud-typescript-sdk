// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindDmAccountRequestExtendAttr extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
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

