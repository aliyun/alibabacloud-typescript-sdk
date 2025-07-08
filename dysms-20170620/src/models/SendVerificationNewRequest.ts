// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendVerificationNewRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bizType?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  target?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  verifyType?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      target: 'Target',
      verifyType: 'VerifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      target: 'string',
      verifyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

