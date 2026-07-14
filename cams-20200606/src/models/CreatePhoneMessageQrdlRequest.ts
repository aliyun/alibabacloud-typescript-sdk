// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePhoneMessageQrdlRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the ISV sub-customer or the instance ID of the direct customer. You can view the Space ID on the
   * <props="china">[Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement)
   * <props="intl">[Channel Management](https://chatapp.console.alibabacloud.com/CustomerList)
   * page.
   * 
   * @example
   * cams-kei****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The type of the generated image. Valid values:
   * 
   * - PNG
   * 
   *  - SVG
   * 
   * This parameter is required.
   * 
   * @example
   * PNG
   */
  generateQrImage?: string;
  ownerId?: number;
  /**
   * @remarks
   * The phone number. You can view the phone number on the
   * <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)
   * <props="intl">[Channel Management](https://chatapp.console.alibabacloud.com/CustomerList)> **Manage** > **WABA Management** > **Number Management** page.
   * 
   * This parameter is required.
   * 
   * @example
   * 86138009****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The message content.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  prefilledMessage?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      generateQrImage: 'GenerateQrImage',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      prefilledMessage: 'PrefilledMessage',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      generateQrImage: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      prefilledMessage: 'string',
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

