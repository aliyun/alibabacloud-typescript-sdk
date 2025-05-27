// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmsSignRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Signature name. Must be an SMS signature already applied for by this account.
   * 
   * - Obtain from the return parameters after calling the [CreateSmsSign](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-createsmssign?spm) API.
   * - View the signature on the [Signature Management](https://dysms.console.aliyun.com/domestic/text/sign) page.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
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

