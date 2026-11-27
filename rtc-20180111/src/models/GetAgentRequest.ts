// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentRequest extends $dara.Model {
  /**
   * @remarks
   * Application ID. You can create and view this ID in the console. Only one ID is supported.
   * 
   * @example
   * aec****
   */
  appId?: string;
  /**
   * @remarks
   * Channel ID.
   * 
   * @example
   * 1234
   */
  channelId?: string;
  /**
   * @remarks
   * Task ID.
   * 
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

