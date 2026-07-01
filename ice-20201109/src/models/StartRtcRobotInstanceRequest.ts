// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRtcRobotInstanceRequestConfig extends $dara.Model {
  asrMaxSilence?: number;
  /**
   * @remarks
   * Specifies whether to allow voice interrupt.
   * 
   * @example
   * true
   */
  enableVoiceInterrupt?: boolean;
  /**
   * @remarks
   * The greeting the AI agent speaks when a user joins the call.
   * 
   * @example
   * 你好，有什么可以帮助的吗？
   */
  greeting?: string;
  useVoiceprint?: boolean;
  userOfflineTimeout?: number;
  userOnlineTimeout?: number;
  /**
   * @remarks
   * The voice\\"s unique identifier.
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
   * The authentication token required to join the RTC call. You must generate this token using your RTC AppKey.
   * 
   * This parameter is required.
   * 
   * @example
   * **********
   */
  authToken?: string;
  /**
   * @remarks
   * The RTC channel\\"s unique identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * testId
   */
  channelId?: string;
  /**
   * @remarks
   * Specifies advanced call configurations that override the agent\\"s default configurations. If you omit this parameter, the agent uses its default configurations.
   */
  config?: StartRtcRobotInstanceRequestConfig;
  /**
   * @remarks
   * The AI agent\\"s unique identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * ca28b08ad3464ebcb42e5c0f7c6d2e89
   */
  robotId?: string;
  /**
   * @remarks
   * User-defined information.
   * 
   * @example
   * {}
   */
  userData?: string;
  /**
   * @remarks
   * The AI agent\\"s unique identifier within the channel.
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

