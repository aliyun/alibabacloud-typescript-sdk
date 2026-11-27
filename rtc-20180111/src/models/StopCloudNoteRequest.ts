// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopCloudNoteRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * qwsz1234
   */
  appId?: string;
  /**
   * @remarks
   * The channel name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  channelId?: string;
  /**
   * @remarks
   * The idempotency parameter.
   * 
   * @example
   * 53200b81-b761-4c10-842a-a0726d97xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rtc
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      clientToken: 'ClientToken',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      clientToken: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

