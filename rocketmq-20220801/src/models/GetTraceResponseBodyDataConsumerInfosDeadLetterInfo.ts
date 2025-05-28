// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTraceResponseBodyDataConsumerInfosDeadLetterInfo extends $dara.Model {
  /**
   * @remarks
   * MessageId.
   * 
   * @example
   * 7F000001001F7A4F0F29463F0376047D
   */
  messageId?: string;
  /**
   * @remarks
   * Arrival time in the dead letter queue.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  toDlqTime?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * Register_Sync
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'messageId',
      toDlqTime: 'toDlqTime',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      toDlqTime: 'string',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

