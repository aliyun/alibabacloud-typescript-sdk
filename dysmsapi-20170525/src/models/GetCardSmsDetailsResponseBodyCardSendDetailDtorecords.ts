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

