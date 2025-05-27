// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySendDetailsResponseBodySmsSendDetailDTOsSmsSendDetailDTO extends $dara.Model {
  /**
   * @remarks
   * The content of the message.
   * 
   * @example
   * 【Aliyun】This is a test message.
   */
  content?: string;
  /**
   * @remarks
   * The status code returned by the carrier.
   * 
   * *   If the message is delivered, "DELIVERED" is returned.
   * *   For information about the error codes that may be returned if the message is not delivered, see [error codes](https://help.aliyun.com/document_detail/101347.html).
   * 
   * @example
   * DELIVERED
   */
  errCode?: string;
  /**
   * @remarks
   * The extended field.
   * 
   * @example
   * 123
   */
  outId?: string;
  /**
   * @remarks
   * The mobile numbers of the recipients.
   * 
   * @example
   * 1390000****
   */
  phoneNum?: string;
  /**
   * @remarks
   * The date and time when the message was received.
   * 
   * @example
   * 2019-01-08 16:44:13
   */
  receiveDate?: string;
  /**
   * @remarks
   * The date and time when the message was sent.
   * 
   * @example
   * 2019-01-08 16:44:10
   */
  sendDate?: string;
  /**
   * @remarks
   * The delivery status of the message. Valid values:
   * 
   * *   **1**: The message has not received a delivery receipt yet.
   * *   **2**: The message failed to be delivered.
   * *   **3**: The message was delivered.
   * 
   * @example
   * 3
   */
  sendStatus?: number;
  /**
   * @remarks
   * The ID of the message template.
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

