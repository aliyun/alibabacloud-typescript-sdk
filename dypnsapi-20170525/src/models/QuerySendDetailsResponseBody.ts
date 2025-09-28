// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySendDetailsResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * The content of the text message.
   * 
   * @example
   * 203160
   */
  content?: string;
  /**
   * @remarks
   * The status code returned by the carrier.
   * 
   * *   If the text message was delivered, "DELIVERED" is returned.
   * *   If the text message failed to be sent, see [Error codes](https://help.aliyun.com/document_detail/101347.html?spm=a2c4g.419277.0.i8) for more information.
   * 
   * @example
   * DELIVERED
   */
  errCode?: string;
  /**
   * @remarks
   * The extension field.
   * 
   * @example
   * 12131231
   */
  outId?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 1390000****
   */
  phoneNum?: string;
  /**
   * @remarks
   * The date and time when the text message was received.
   * 
   * @example
   * 2019-01-08 16:44:13
   */
  receiveDate?: string;
  /**
   * @remarks
   * The date when the text message was sent. You can query text messages that were sent within the last 30 days.
   * 
   * The date is in the yyyyMMdd format. Example: 20181225.
   * 
   * @example
   * 2019-01-08 16:44:13
   */
  sendDate?: string;
  /**
   * @remarks
   * The delivery status of the text message.
   * 
   * *   1: A delivery receipt is to be sent.
   * *   2: The text message failed to be sent.
   * *   3: The text message was sent.
   * 
   * @example
   * 3
   */
  sendStatus?: number;
  /**
   * @remarks
   * The code of the text message template.
   * 
   * Log on to the SMS console. In the left-side navigation pane, click **Go China** or **Go Globe**. You can view the text message template code in the **Template Code** column on the **Message Templates** tab.
   * 
   * >  The text message templates must be created on the Go Globe page and approved.
   * 
   * @example
   * SMS_12231****
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      errCode: 'ErrCode',
      outId: 'OutId',
      phoneNum: 'PhoneNum',
      receiveDate: 'ReceiveDate',
      sendDate: 'SendDate',
      sendStatus: 'SendStatus',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      errCode: 'string',
      outId: 'string',
      phoneNum: 'string',
      receiveDate: 'string',
      sendDate: 'string',
      sendStatus: 'number',
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

export class QuerySendDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * none
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code.
   * 
   * If OK is returned, the request is successful. Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html?spm=a2c4g.419277.0.i11).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The returned data.
   */
  model?: QuerySendDetailsResponseBodyModel[];
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries in the list.
   * 
   * @example
   * 42
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: { 'type': 'array', 'itemType': QuerySendDetailsResponseBodyModel },
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.model)) {
      $dara.Model.validateArray(this.model);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

