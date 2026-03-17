// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatappVerifyCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the ISV account.
   * 
   * This parameter is required.
   * 
   * @example
   * 229393838*****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The language. For more information, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * This parameter is required.
   * 
   * @example
   * zh_CN
   */
  locale?: string;
  /**
   * @remarks
   * The verification method.
   * 
   * Valid values:
   * 
   * *   Voice: sends the verification code via phone call.
   * *   sms: sends the verification code via SMS.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS
   */
  method?: string;
  ownerId?: number;
  /**
   * @remarks
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 8613800001234
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      locale: 'Locale',
      method: 'Method',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      locale: 'string',
      method: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
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

