// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SmsConversionIntlRequest extends $dara.Model {
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
   * The ID of the message.
   * 
   * This parameter is required.
   * 
   * @example
   * 1008030300****
   */
  messageId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      conversionTime: 'ConversionTime',
      delivered: 'Delivered',
      messageId: 'MessageId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversionTime: 'number',
      delivered: 'boolean',
      messageId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

