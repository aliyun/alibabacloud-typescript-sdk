// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendMessageToGlobeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the channel.
   * 
   * @example
   * 3790
   */
  channelId?: string;
  /**
   * @remarks
   * The mobile phone number of the sender. You can also specify a sender ID. The sender ID can contain both letters and digits. If it does, the ID must be between 1 to 11 characters in length. If the sender ID contains only digits, it must be 1 to 15 characters in length.
   * 
   * @example
   * Alicloud321
   */
  from?: string;
  /**
   * @remarks
   * The content of the message.
   * 
   * This parameter is required.
   * 
   * @example
   * Hello
   */
  message?: string;
  /**
   * @remarks
   * The ID of the messaging campaign. It must be 1 to 255 characters in length. The ID is the value of the TaskId field in the delivery receipt of the message.
   * 
   * @example
   * 123****789
   */
  taskId?: string;
  /**
   * @remarks
   * The mobile phone number to which the message is sent. You must add the dialing code to the beginning of the mobile phone number. Example: 8521245567\\*\\*\\*\\*.
   * 
   * For more information, see [Dialing codes](https://www.alibabacloud.com/help/en/sms/product-overview/dialing-codes?spm=a2c63.p38356.0.0.48b940a1PFYRMz).
   * 
   * >  You cannot call the SendMessageToGlobe operation to send messages to the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * 8521245567****
   */
  to?: string;
  type?: string;
  /**
   * @remarks
   * The validity period of the message. Unit: seconds.
   * 
   * @example
   * 600
   */
  validityPeriod?: number;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      from: 'From',
      message: 'Message',
      taskId: 'TaskId',
      to: 'To',
      type: 'Type',
      validityPeriod: 'ValidityPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      from: 'string',
      message: 'string',
      taskId: 'string',
      to: 'string',
      type: 'string',
      validityPeriod: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

