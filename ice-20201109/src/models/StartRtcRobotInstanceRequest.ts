// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRtcRobotInstanceRequestConfig extends $dara.Model {
  asrMaxSilence?: number;
  /**
   * @remarks
   * Specifies whether voice interruption is allowed.
   * 
   * @example
   * true
   */
  enableVoiceInterrupt?: boolean;
  /**
   * @remarks
   * The greeting message that the AI agent proactively speaks after the user joins the call.
   * 
   * @example
   * Hello, how can I help you?
   */
  greeting?: string;
  useVoiceprint?: boolean;
  userOfflineTimeout?: number;
  userOnlineTimeout?: number;
  /**
   * @remarks
   * The voice ID.
   * 
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

export class StartRtcRobotInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The RTC join token. You must generate this token by using the RTC AppKey.
   * 
   * This parameter is required.
   * 
   * @example
   * **********
   */
  authToken?: string;
  /**
   * @remarks
   * The RTC channel ID.
   * 
   * This parameter is required.
   * 
   * @example
   * testId
   */
  channelId?: string;
  /**
   * @remarks
   * The advanced call configuration. If specified, this configuration overwrites the default configurations that were set when the AI agent was created. If not specified, the default configurations are used.
   */
  config?: StartRtcRobotInstanceRequestConfig;
  /**
   * @remarks
   * The AI agent ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ca28b08ad3464ebcb42e5c0f7c6d2e89
   */
  robotId?: string;
  /**
   * @remarks
   * The custom user information.
   * 
   * @example
   * {}
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the AI agent in the channel.
   * 
   * This parameter is required.
   * 
   * @example
   * my-robot
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      authToken: 'AuthToken',
      channelId: 'ChannelId',
      config: 'Config',
      robotId: 'RobotId',
      userData: 'UserData',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      channelId: 'string',
      config: StartRtcRobotInstanceRequestConfig,
      robotId: 'string',
      userData: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

