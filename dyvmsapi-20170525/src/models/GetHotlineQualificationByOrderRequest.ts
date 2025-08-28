// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotlineQualificationByOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The ticket ID.
   * 
   * You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home), choose **Qualification\\&Communication Script Management** > **Qualification Management**, and then click the **400 Qualifications** tab to view the ticket ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 22456****
   */
  orderId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      ownerId: 'number',
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

