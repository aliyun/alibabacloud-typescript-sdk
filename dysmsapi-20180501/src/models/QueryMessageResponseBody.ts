// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class QueryMessageResponseBodyNumberDetail extends $dara.Model {
  /**
   * @remarks
   * The carrier that owns the mobile phone number.
   * 
   * @example
   * CMI
   */
  carrier?: string;
  /**
   * @remarks
   * The country to which the mobile phone number belongs.
   * 
   * @example
   * China
   */
  country?: string;
  /**
   * @remarks
   * The region to which the mobile phone number belongs.
   * 
   * @example
   * HongKong
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      country: 'Country',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
      country: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the message.
   * 
   * @example
   * DELIVERED
   */
  errorCode?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * success
   */
  errorDescription?: string;
  /**
   * @remarks
   * The content of the message.
   * 
   * @example
   * Hello!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the message.
   * 
   * @example
   * 1008030xxx3003
   */
  messageId?: string;
  /**
   * @remarks
   * The details about the mobile phone number.
   */
  numberDetail?: QueryMessageResponseBodyNumberDetail;
  /**
   * @remarks
   * The time when the delivery receipt was received from the carrier.
   * 
   * @example
   * Mon, 24 Dec 2018 16:58:22 +0800
   */
  receiveDate?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8D28D0
   */
  requestId?: string;
  /**
   * @remarks
   * The status code of the delivery request.
   * 
   * @example
   * OK
   */
  responseCode?: string;
  /**
   * @remarks
   * The description of the delivery request status.
   * 
   * @example
   * The SMS Send Request was accepted
   */
  responseDescription?: string;
  /**
   * @remarks
   * The time when the message was sent to the carrier.
   * 
   * @example
   * Mon, 24 Dec 2018 16:58:22 +0800
   */
  sendDate?: string;
  /**
   * @remarks
   * The delivery status of the message.
   * 
   * *   1: The message was sent.
   * *   2: The message failed to be sent.
   * *   3: The message is being sent.
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The mobile phone number to which the message was sent.
   * 
   * @example
   * 6581xxx810
   */
  to?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorDescription: 'ErrorDescription',
      message: 'Message',
      messageId: 'MessageId',
      numberDetail: 'NumberDetail',
      receiveDate: 'ReceiveDate',
      requestId: 'RequestId',
      responseCode: 'ResponseCode',
      responseDescription: 'ResponseDescription',
      sendDate: 'SendDate',
      status: 'Status',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorDescription: 'string',
      message: 'string',
      messageId: 'string',
      numberDetail: QueryMessageResponseBodyNumberDetail,
      receiveDate: 'string',
      requestId: 'string',
      responseCode: 'string',
      responseDescription: 'string',
      sendDate: 'string',
      status: 'string',
      to: 'string',
    };
  }

  validate() {
    if(this.numberDetail && typeof (this.numberDetail as any).validate === 'function') {
      (this.numberDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

