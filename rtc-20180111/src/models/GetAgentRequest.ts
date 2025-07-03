// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentRequest extends $dara.Model {
  /**
   * @example
   * aec****
   */
  appId?: string;
  /**
   * @example
   * 1234
   */
  channelId?: string;
  /**
   * @example
   * yourTaskId
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
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

