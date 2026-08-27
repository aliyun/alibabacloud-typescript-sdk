// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPhoneNumberVerificationStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the ISV sub-customer or the instance ID of the direct customer. You can view the Space ID in the
   * <props="china">[Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement)
   * <props="intl">[Channel Management](https://chatapp.console.alibabacloud.com/CustomerList)
   * page.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-kei****
   */
  custSpaceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The phone number. You can view it in the
   * <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)
   * <props="intl">[Channel Management](https://chatapp.console.alibabacloud.com/CustomerList)> **Manage** > **WABA Management** > **Phone Number Management** page.
   * 
   * This parameter is required.
   * 
   * @example
   * 86138009****
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
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

