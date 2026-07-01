// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SmsConversionIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The timestamp at which the message reached the recipient. Must be a Unix timestamp, expressed as a long integer in milliseconds.
   * 
   * - If this field is not specified: defaults to the current timestamp.
   * 
   * - If this field is specified: the timestamp must be greater than the send time and less than the current timestamp.
   * 
   * @example
   * 1349055900000
   */
  conversionTime?: number;
  /**
   * @remarks
   * Set to true if your user replied to the message you sent. Otherwise, set to false.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  delivered?: boolean;
  /**
   * @remarks
   * Message ID.
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

