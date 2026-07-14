// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePhoneMessageQrdlRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the ISV sub-customer or the instance ID of the direct customer. You can view the Space ID on the
   * <props="china">[Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[Channel Management](https://chatapp.console.alibabacloud.com/CustomerList) page.
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
   * SVG
   */
  generateQrImage?: string;
  ownerId?: number;
  /**
   * @remarks
   * The phone number. You can view the phone number on the
   * <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)
   * <props="intl">[Channel Management](https://chatapp.console.alibabacloud.com/CustomerList)> **Management** > **WABA Management** > **Number Management** page.
   * 
   * This parameter is required.
   * 
   * @example
   * 86158********
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The message content.
   * 
   * This parameter is required.
   * 
   * @example
   * Hello
   */
  prefilledMessage?: string;
  /**
   * @remarks
   * The QR code encoding. This is the QrdlCode returned when you called the [CreatePhoneMessageQrdl](https://help.aliyun.com/document_detail/2638749.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * D9II3***
   */
  qrdlCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      generateQrImage: 'GenerateQrImage',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      prefilledMessage: 'PrefilledMessage',
      qrdlCode: 'QrdlCode',
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
      qrdlCode: 'string',
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

