// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCardSmsDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * Card SMS sending ID, which is the BizCardId field in the response when calling SendCardSms or SendBatchCardSms.
   * 
   * @example
   * 123456^0
   */
  bizCardId?: string;
  /**
   * @remarks
   * Digital SMS sending ID, which is the BizDigitalId field in the response when calling SendCardSms or SendBatchCardSms.
   * 
   * @example
   * 12346^0
   */
  bizDigitId?: string;
  /**
   * @remarks
   * Text SMS sending ID, which is the BizSmsId field in the response when calling SendCardSms or SendBatchCardSms.
   * 
   * @example
   * 1234576^0
   */
  bizSmsId?: string;
  /**
   * @remarks
   * For paginated viewing of sending records, specify the current page number of the sending records.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  ownerId?: number;
  /**
   * @remarks
   * For paginated viewing of sending records, specify the number of card SMS records to display per page.
   * 
   * The value range is 1~50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Domestic phone number that received the SMS. Format: 11-digit phone number, for example, 1390000****.
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
   * Card SMS sending date, supports querying records from the last 30 days.
   * 
   * Format: yyyyMMdd, for example, 20240112.
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

