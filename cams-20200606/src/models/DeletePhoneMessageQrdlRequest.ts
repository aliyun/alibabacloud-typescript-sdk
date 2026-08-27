// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePhoneMessageQrdlRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the ISV sub-customer or the instance ID of the direct customer. You can view the Space ID on the
   * <props="china">[Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[Channel Management](https://chatapp.console.alibabacloud.com/CustomerList) page.
   * 
   * @example
   * cams-kei****
   */
  custSpaceId?: string;
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
   * The QR code identifier. This is the QrdlCode returned by the [CreatePhoneMessageQrdl](https://help.aliyun.com/document_detail/2638749.html) operation when you created the message QR code, or the QrdlCode returned by the [UpdatePhoneMessageQrdl](https://help.aliyun.com/document_detail/2638746.html) operation when you modified the QR code.
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
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      qrdlCode: 'QrdlCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
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

