// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySendDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery receipt. The delivery receipt ID is the value of the BizId parameter that is returned when you call the SendSms or SendBatchSms operation.
   * 
   * @example
   * 134523^435****
   */
  bizId?: string;
  /**
   * @remarks
   * The page number of the first page.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  ownerId?: number;
  /**
   * @remarks
   * The number of items displayed per page.
   * 
   * Valid values: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The mobile numbers of the recipients. Format:
   * 
   * *   If you send messages in the Chinese mainland, specify an 11-digit mobile number, for example, 1390000\\*\\*\\*\\*.
   * *   If you send messages to countries or regions outside the Chinese mainland, specify this parameter in the \\<Area code>\\<Mobile number> format. Example: 8520000\\*\\*\\*\\*.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The date when the message was sent. You can query messages that were sent within the last 30 days.
   * 
   * Format: yyyyMMdd. Example: 20181225.
   * 
   * This parameter is required.
   * 
   * @example
   * 20181228
   */
  sendDate?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      currentPage: 'CurrentPage',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendDate: 'SendDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      currentPage: 'number',
      ownerId: 'number',
      pageSize: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

