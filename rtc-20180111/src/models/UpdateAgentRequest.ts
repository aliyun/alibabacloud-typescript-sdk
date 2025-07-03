// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateAgentRequestVoiceChatConfig } from "./UpdateAgentRequestVoiceChatConfig";


export class UpdateAgentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4eah****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  voiceChatConfig?: UpdateAgentRequestVoiceChatConfig;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      taskId: 'TaskId',
      voiceChatConfig: 'VoiceChatConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      taskId: 'string',
      voiceChatConfig: UpdateAgentRequestVoiceChatConfig,
    };
  }

  validate() {
    if(this.voiceChatConfig && typeof (this.voiceChatConfig as any).validate === 'function') {
      (this.voiceChatConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

