// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmsSignRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The signature name. The signature must be applied for by your account.
   * 
   * - After you call the [CreateSmsSign](https://help.aliyun.com/document_detail/2807427.html) operation, obtain the signature name from the response.
   * - View the signature on the [Signatures](https://dysms.console.aliyun.com/domestic/text/sign) page.
   * 
   * This parameter is required.
   * 
   * @example
   * 阿里云
   */
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

