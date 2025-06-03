// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopCloudNoteRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwsz1234
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  channelId?: string;
  clientToken?: string;
  /**
   * @remarks
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

