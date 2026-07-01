// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCardSmsDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The card SMS sending ID. When you send a card SMS by calling the [SendCardSms](https://help.aliyun.com/document_detail/434120.html) or [SendBatchCardSms](https://help.aliyun.com/document_detail/434119.html) operation, obtain the BizCardId field from the response.
   * 
   * @example
   * 123456^0
   */
  bizCardId?: string;
  /**
   * @remarks
   * The digital SMS sending ID. When you send a card SMS by calling the [SendCardSms](https://help.aliyun.com/document_detail/434120.html) or [SendBatchCardSms](https://help.aliyun.com/document_detail/434119.html) operation, obtain the BizDigitalId field from the response.
   * 
   * @example
   * 12346^0
   */
  bizDigitId?: string;
  /**
   * @remarks
   * The text SMS sending ID. When you send a card SMS by calling the [SendCardSms](https://help.aliyun.com/document_detail/434120.html) or [SendBatchCardSms](https://help.aliyun.com/document_detail/434119.html) operation, obtain the BizSmsId field from the response.
   * 
   * @example
   * 1234576^0
   */
  bizSmsId?: string;
  /**
   * @remarks
   * The current page number when you paginate sending records.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  ownerId?: number;
  /**
   * @remarks
   * The number of card SMS records to display on each page when you paginate sending records.
   * 
   * Valid values: 1 to 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The domestic mobile phone number that received the SMS. Format: an 11-digit mobile phone number. For example, 1390000****.
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
   * The card SMS sending date. Records from the last 30 days can be queried.
   * 
   * Format: yyyyMMdd. For example, 20240112.
   * 
   * This parameter is required.
   * 
   * @example
   * 20240112
   */
  sendDate?: string;
  static names(): { [key: string]: string } {
    return {
      bizCardId: 'BizCardId',
      bizDigitId: 'BizDigitId',
      bizSmsId: 'BizSmsId',
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
      bizCardId: 'string',
      bizDigitId: 'string',
      bizSmsId: 'string',
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

