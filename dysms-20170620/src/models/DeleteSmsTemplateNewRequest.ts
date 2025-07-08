// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSmsTemplateNewRequest extends $dara.Model {
  isSmsSign?: boolean;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  smsTemplateIds?: string;
  static names(): { [key: string]: string } {
    return {
      isSmsSign: 'IsSmsSign',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smsTemplateIds: 'SmsTemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSmsSign: 'boolean',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smsTemplateIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

