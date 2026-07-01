// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCardSmsDetailsResponseBodyCardSendDetailDTORecords extends $dara.Model {
  /**
   * @remarks
   * The sending error code.
   * 
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @remarks
   * The outId passed by the customer.
   * 
   * @example
   * 12345678
   */
  outId?: string;
  /**
   * @remarks
   * The phone number that received the SMS.
   * 
   * @example
   * 156****9080
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The receive time.
   * 
   * @example
   * 2024-09-27 11:26:35
   */
  receiveDate?: string;
  /**
   * @remarks
   * The SMS receive type.
   * 
   * @example
   * CARD_SMS
   */
  receiveType?: string;
  /**
   * @remarks
   * The render time.
   * 
   * @example
   * 2024-09-27 12:13:39
   */
  renderDate?: string;
  /**
   * @remarks
   * The parsing status. Valid values:
   * 
   * - 0: not parsed.
   * - 1: parsed successfully.
   * - 3: not parsed.
   * 
   * @example
   * 1
   */
  renderStatus?: number;
  /**
   * @remarks
   * The SMS sending time.
   * 
   * @example
   * 2024-09-27 11:26:32
   */
  sendDate?: string;
  /**
   * @remarks
   * The sending status. Valid values:
   * 
   * - 1: sending.
   * - 2: sending failed.
   * - 3: sending succeeded.
   * - 4: addressing failed.
   * 
   * @example
   * 3
   */
  sendStatus?: number;
  /**
   * @remarks
   * The SMS content. Only text SMS has a value.
   * 
   * @example
   * 您收到一条短信消息
   */
  smsContent?: string;
  /**
   * @remarks
   * The template code.
   * 
   * @example
   * CARD_SMS_6***
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      outId: 'OutId',
      phoneNumber: 'PhoneNumber',
      receiveDate: 'ReceiveDate',
      receiveType: 'ReceiveType',
      renderDate: 'RenderDate',
      renderStatus: 'RenderStatus',
      sendDate: 'SendDate',
      sendStatus: 'SendStatus',
      smsContent: 'SmsContent',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      outId: 'string',
      phoneNumber: 'string',
      receiveDate: 'string',
      receiveType: 'string',
      renderDate: 'string',
      renderStatus: 'number',
      sendDate: 'string',
      sendStatus: 'number',
      smsContent: 'string',
      templateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardSmsDetailsResponseBodyCardSendDetailDTO extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of card SMS sending records.
   */
  records?: GetCardSmsDetailsResponseBodyCardSendDetailDTORecords[];
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      records: 'Records',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': GetCardSmsDetailsResponseBodyCardSendDetailDTORecords },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardSmsDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access denied details. This parameter is returned only when the RAM check fails.
   * 
   * @example
   * 无
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The card SMS sending result.
   */
  cardSendDetailDTO?: GetCardSmsDetailsResponseBodyCardSendDetailDTO;
  /**
   * @remarks
   * The request status code.
   * * OK indicates that the request was successful.
   * * For other error codes, see [API error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - **true**: The call was successful.
   * 
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      cardSendDetailDTO: 'CardSendDetailDTO',
      code: 'Code',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      cardSendDetailDTO: GetCardSmsDetailsResponseBodyCardSendDetailDTO,
      code: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.cardSendDetailDTO && typeof (this.cardSendDetailDTO as any).validate === 'function') {
      (this.cardSendDetailDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

