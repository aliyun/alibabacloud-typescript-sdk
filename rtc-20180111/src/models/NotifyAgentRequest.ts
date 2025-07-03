// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NotifyAgentRequest extends $dara.Model {
  /**
   * @example
   * aec****
   */
  appId?: string;
  /**
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @example
   * {\\"color\\":\\"blue\\"}
   */
  customAttribute?: string;
  /**
   * @example
   * true
   */
  interruptable?: boolean;
  message?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * yourTaskId
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      customAttribute: 'CustomAttribute',
      interruptable: 'Interruptable',
      message: 'Message',
      priority: 'Priority',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      customAttribute: 'string',
      interruptable: 'boolean',
      message: 'string',
      priority: 'number',
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

