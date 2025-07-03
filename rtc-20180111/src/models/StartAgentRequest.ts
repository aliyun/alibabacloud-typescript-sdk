// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartAgentRequestRtcConfig } from "./StartAgentRequestRtcConfig";
import { StartAgentRequestVoiceChatConfig } from "./StartAgentRequestVoiceChatConfig";


export class StartAgentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aoe****
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
   */
  rtcConfig?: StartAgentRequestRtcConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 76dasgb****
   */
  templateId?: string;
  voiceChatConfig?: StartAgentRequestVoiceChatConfig;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      rtcConfig: 'RtcConfig',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      voiceChatConfig: 'VoiceChatConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      rtcConfig: StartAgentRequestRtcConfig,
      taskId: 'string',
      templateId: 'string',
      voiceChatConfig: StartAgentRequestVoiceChatConfig,
    };
  }

  validate() {
    if(this.rtcConfig && typeof (this.rtcConfig as any).validate === 'function') {
      (this.rtcConfig as any).validate();
    }
    if(this.voiceChatConfig && typeof (this.voiceChatConfig as any).validate === 'function') {
      (this.voiceChatConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

