// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordDataRequest extends $dara.Model {
  /**
   * @remarks
   * AccountId.
   * 
   * @example
   * 2235****
   */
  accountId?: string;
  /**
   * @remarks
   * Account type.
   * 
   * @example
   * BUC_TYPE
   */
  accountType?: string;
  /**
   * @remarks
   * Session ID.
   * 
   * @example
   * 1004849****
   */
  acid?: string;
  ownerId?: number;
  /**
   * @remarks
   * Product name. Default value: **aiccs**.
   * 
   * @example
   * aiccs
   */
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Recording desensitization level. Valid values: **1–4**.
   * 
   * @example
   * 2
   */
  secLevel?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountType: 'AccountType',
      acid: 'Acid',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secLevel: 'SecLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountType: 'string',
      acid: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

