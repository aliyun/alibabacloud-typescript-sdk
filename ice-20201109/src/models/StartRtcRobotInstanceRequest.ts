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

export class StartRtcRobotInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * **********
   */
  authToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testId
   */
  channelId?: string;
  config?: StartRtcRobotInstanceRequestConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ca28b08ad3464ebcb42e5c0f7c6d2e89
   */
  robotId?: string;
  /**
   * @example
   * {}
   */
  userData?: string;
  /**
   * @remarks
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

