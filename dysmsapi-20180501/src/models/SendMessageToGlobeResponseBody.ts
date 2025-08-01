// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendMessageToGlobeResponseBodyNumberDetail extends $dara.Model {
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

export class SendMessageToGlobeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The sender ID returned.
   * 
   * @example
   * Alicloud321
   */
  from?: string;
  /**
   * @remarks
   * The ID of the message.
   * 
   * @example
   * 1008030300****
   */
  messageId?: string;
  /**
   * @remarks
   * The details about the mobile phone number of the recipient.
   */
  numberDetail?: SendMessageToGlobeResponseBodyNumberDetail;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
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
   * The number of messages that incurred fees.
   * 
   * @example
   * 1
   */
  segments?: string;
  /**
   * @remarks
   * The mobile phone number to which the message was sent.
   * 
   * @example
   * 1380000****
   */
  to?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      messageId: 'MessageId',
      numberDetail: 'NumberDetail',
      requestId: 'RequestId',
      responseCode: 'ResponseCode',
      responseDescription: 'ResponseDescription',
      segments: 'Segments',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      messageId: 'string',
      numberDetail: SendMessageToGlobeResponseBodyNumberDetail,
      requestId: 'string',
      responseCode: 'string',
      responseDescription: 'string',
      segments: 'string',
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

