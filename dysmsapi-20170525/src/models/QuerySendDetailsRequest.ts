// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySendDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The delivery receipt ID. This is the `BizId` returned in the response when you call the [SendSms](https://help.aliyun.com/document_detail/419273.html) or [SendBatchSms](https://help.aliyun.com/document_detail/419274.html) operation.
   * 
   * > You can specify only one `BizId`.
   * 
   * @example
   * 134523^435****
   */
  bizId?: string;
  /**
   * @remarks
   * The current page number for paginated results.
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
   * The number of delivery records to return on each page.
   * 
   * Valid values: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The phone number to query. The format is as follows:
   * 
   * - For messages to the Chinese mainland, use an 11-digit phone number, such as 1390000\\*\\*\\*\\*.
   * 
   * - For international SMS, use the format: country/region code + phone number, such as 8520000\\*\\*\\*\\*.
   * 
   * > You can specify only one phone number.
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
   * The date when the SMS message was sent. You can query records from the past 30 days.
   * 
   * Format: **yyyyMMdd**, for example, 20250601.
   * 
   * This parameter is required.
   * 
   * @example
   * 20250601
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

