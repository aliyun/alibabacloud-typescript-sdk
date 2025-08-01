// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SmsConversionRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the OTP message was delivered. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * *   If you leave the parameter empty, the current timestamp is specified by default.
   * *   If you specify the parameter, the timestamp must be greater than the message sending time and less than the current timestamp.
   * 
   * @example
   * 1349055900000
   */
  conversionTime?: number;
  /**
   * @remarks
   * Specifies whether customers replied to the OTP message. Valid values: true and false.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  delivered?: boolean;
  /**
   * @remarks
   * The ID of the OTP message.
   * 
   * @example
   * 1008030300****
   */
  messageId?: string;
  /**
   * @remarks
   * The mobile phone number of the recipient. You must add the dialing code to the beginning of the mobile phone number.
   * 
   * For more information, see [Dialing codes](https://help.aliyun.com/document_detail/158400.html).
   * 
   * @example
   * 8521245567****
   */
  to?: string;
  static names(): { [key: string]: string } {
    return {
      conversionTime: 'ConversionTime',
      delivered: 'Delivered',
      messageId: 'MessageId',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversionTime: 'number',
      delivered: 'boolean',
      messageId: 'string',
      to: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

