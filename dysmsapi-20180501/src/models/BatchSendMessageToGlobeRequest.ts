// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSendMessageToGlobeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery channel.
   * 
   * @example
   * sms-djnfjn344
   */
  channelId?: string;
  /**
   * @remarks
   * The mobile phone number of the sender. You can specify the sender ID when you call the API operation. The sender ID can contain only digits and letters. If the sender ID contains letters, it can be a maximum of 11 characters in length. If the sender ID contains only digits, it can be a maximum of 15 characters in length.
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
   * [\\"message to 931520581****\\",\\"message to 931530581****\\",\\"message to 931540581****\\",\\"message to 931550581****\\"]
   */
  message?: string;
  /**
   * @remarks
   * The ID of the messaging campaign. It must be 1 to 255 characters in length. The ID is the value of the TaskId field in the delivery receipt of the message.
   * 
   * @example
   * 123789****
   */
  taskId?: string;
  /**
   * @remarks
   * The mobile phone number of the recipient. You must add the dialing code to the beginning of each mobile phone number.
   * 
   * For more information, see [Dialing codes](https://help.aliyun.com/document_detail/158400.html).
   * 
   * This parameter is required.
   * 
   * @example
   * [\\"931520581****\\",\\"931530581****\\",\\"931540581****\\",\\"931550581****\\"]
   */
  to?: string;
  /**
   * @remarks
   * The type of the message. Valid values:
   * 
   * *   **NOTIFY**: notification
   * *   **MKT**: promotional message
   * 
   * @example
   * NOTIFY
   */
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

