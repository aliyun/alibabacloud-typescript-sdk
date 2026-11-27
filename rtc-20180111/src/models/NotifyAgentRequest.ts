// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NotifyAgentRequestBackgroundMusic extends $dara.Model {
  /**
   * @remarks
   * The audio format.
   * 
   * - wav
   * 
   * @example
   * wav
   */
  format?: string;
  /**
   * @remarks
   * The resource URL.
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'format',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Create and query it in the console. Only a single ID is supported.
   * 
   * @example
   * aec****
   */
  appId?: string;
  /**
   * @remarks
   * Background audio.
   */
  backgroundMusic?: NotifyAgentRequestBackgroundMusic;
  /**
   * @remarks
   * The channel to join. Only a single ID is supported.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @remarks
   * Custom parameters passed through to the client.
   * 
   * @example
   * {\"color\":\"blue\"}
   */
  customAttribute?: string;
  /**
   * @remarks
   * Indicates whether the announcement can be interrupted. If false, the message cannot be interrupted by voice input, key presses, or other methods.
   * 
   * @example
   * true
   */
  interruptable?: boolean;
  /**
   * @remarks
   * The text content to announce.
   * 
   * @example
   * 您好，现在是2025年4月16日，请问需要什么帮助
   */
  message?: string;
  /**
   * @remarks
   * The priority level for inserting the announcement:
   * 1 — Interrupt the current interaction and announce immediately.
   * 2 — Announce after the current interaction ends.
   * 3 — Announce only if no interaction is active.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      backgroundMusic: 'BackgroundMusic',
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
      backgroundMusic: NotifyAgentRequestBackgroundMusic,
      channelId: 'string',
      customAttribute: 'string',
      interruptable: 'boolean',
      message: 'string',
      priority: 'number',
      taskId: 'string',
    };
  }

  validate() {
    if(this.backgroundMusic && typeof (this.backgroundMusic as any).validate === 'function') {
      (this.backgroundMusic as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

