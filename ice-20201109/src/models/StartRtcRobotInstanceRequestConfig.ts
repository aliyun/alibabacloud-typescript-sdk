// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRtcRobotInstanceRequestConfig extends $dara.Model {
  asrMaxSilence?: number;
  /**
   * @example
   * true
   */
  enableVoiceInterrupt?: boolean;
  greeting?: string;
  useVoiceprint?: boolean;
  userOfflineTimeout?: number;
  userOnlineTimeout?: number;
  /**
   * @example
   * zhixiaoxia
   */
  voiceId?: string;
  voiceprintId?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      asrMaxSilence: 'AsrMaxSilence',
      enableVoiceInterrupt: 'EnableVoiceInterrupt',
      greeting: 'Greeting',
      useVoiceprint: 'UseVoiceprint',
      userOfflineTimeout: 'UserOfflineTimeout',
      userOnlineTimeout: 'UserOnlineTimeout',
      voiceId: 'VoiceId',
      voiceprintId: 'VoiceprintId',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrMaxSilence: 'number',
      enableVoiceInterrupt: 'boolean',
      greeting: 'string',
      useVoiceprint: 'boolean',
      userOfflineTimeout: 'number',
      userOnlineTimeout: 'number',
      voiceId: 'string',
      voiceprintId: 'string',
      volume: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

