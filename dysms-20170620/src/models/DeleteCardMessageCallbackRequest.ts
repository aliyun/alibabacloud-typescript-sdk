// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCardMessageCallbackRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bizType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  callbackUrl?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      callbackUrl: 'CallbackUrl',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      callbackUrl: 'string',
      ownerId: 'number',
      prodCode: 'string',
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

