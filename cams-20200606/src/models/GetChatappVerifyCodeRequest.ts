// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatappVerifyCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The Space ID of the Independent Software Vendor (ISV) sub-customer.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-kei****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The language. For values, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * This parameter is required.
   * 
   * @example
   * zh_CN
   */
  locale?: string;
  /**
   * @remarks
   * The method to receive the verification code.
   * 
   * This parameter is required.
   * 
   * @example
   * sms
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
   * 861380000****
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

