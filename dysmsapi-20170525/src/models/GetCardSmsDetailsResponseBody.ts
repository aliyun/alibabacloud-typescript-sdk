// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCardSmsDetailsResponseBodyCardSendDetailDTORecords extends $dara.Model {
  /**
   * @remarks
   * Error code for sending
   * 
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @remarks
   * Customer-transmitted outId
   * 
   * @example
   * 12345678
   */
  outId?: string;
  /**
   * @remarks
   * Phone number that received the SMS
   * 
   * @example
   * 156****9080
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Receive date
   * 
   * @example
   * 2024-09-27 11:26:35
   */
  receiveDate?: string;
  /**
   * @remarks
   * Receive SMS type
   * 
   * @example
   * CARD_SMS
   */
  receiveType?: string;
  /**
   * @remarks
   * Render date
   * 
   * @example
   * 2024-09-27 12:13:39
   */
  renderDate?: string;
  /**
   * @remarks
   * Render status. 0: Not rendered; 1: Rendered successfully; 3: Not rendered
   * 
   * @example
   * 1
   */
  renderStatus?: number;
  /**
   * @remarks
   * Time when the SMS was sent
   * 
   * @example
   * 2024-09-27 11:26:32
   */
  sendDate?: string;
  /**
   * @remarks
   * Sending status. 1: Sending; 2: Send failed; 3: Sent successfully; 4: Addressing failed
   * 
   * @example
   * 3
   */
  sendStatus?: number;
  /**
   * @remarks
   * SMS content. Only applicable for text messages.
   * 
   * @example
   * 您收到一条短信消息
   */
  smsContent?: string;
  /**
   * @remarks
   * Template code
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
   * Current page number
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * List of card SMS sending records
   */
  records?: GetCardSmsDetailsResponseBodyCardSendDetailDTORecords[];
  /**
   * @remarks
   * Total count
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
   * Access denied detail; this field is returned only if the RAM check fails.
   * 
   * @example
   * 无
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Card SMS sending result
   */
  cardSendDetailDTO?: GetCardSmsDetailsResponseBodyCardSendDetailDTO;
  /**
   * @remarks
   * Request status code.
   * * OK indicates a successful request.
   * * For other error codes, see [API Error Codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Values:
   * - **true** - **false**
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

