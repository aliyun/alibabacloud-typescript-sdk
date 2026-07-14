// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWhatsappUserNameRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the ISV sub-customer or the instance ID of the direct customer. You can view the space ID on the
   * <props="china">[Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement)
   * <props="intl">[Channel Management](https://chatapp.console.alibabacloud.com/CustomerList)
   * page.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-kskd****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The business phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 8613800***
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The transfer action that controls what happens when the requested username is currently used by another business phone number in the same business asset portfolio. For example, use this parameter when you want to move an existing username to another phone number. Valid values:
   * 
   *  - none (default): does not transfer the account. If another business phone number in the same business asset portfolio already uses this username, the request fails with error code 147005.
   * 
   *  - force_transfer: transfers the account from the other business phone number to this business phone number. The account is removed from the other phone number and assigned to this phone number.
   * 
   * @example
   * none
   */
  transferAction?: string;
  /**
   * @remarks
   * Whatsapp user name
   * 
   * This parameter is required.
   * 
   * @example
   * alibaba
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      phoneNumber: 'PhoneNumber',
      transferAction: 'TransferAction',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      phoneNumber: 'string',
      transferAction: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

