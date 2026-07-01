// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRtcRobotInstanceResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow voice interruption.
   * 
   * @example
   * true
   */
  enableVoiceInterrupt?: boolean;
  /**
   * @remarks
   * The welcome message.
   * 
   * @example
   * Hello
   */
  greeting?: string;
  /**
   * @remarks
   * The voice ID.
   * 
   * @example
   * zhixiaoxia
   */
  voiceId?: string;
  static names(): { [key: string]: string } {
    return {
      enableVoiceInterrupt: 'EnableVoiceInterrupt',
      greeting: 'Greeting',
      voiceId: 'VoiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableVoiceInterrupt: 'boolean',
      greeting: 'string',
      voiceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcRobotInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authentication token for the RTC Channel.
   * 
   * @example
   * **********
   */
  authToken?: string;
  /**
   * @remarks
   * The channel ID.
   * 
   * @example
   * testId
   */
  channelId?: string;
  /**
   * @remarks
   * The advanced configurations of the AI agent.
   */
  config?: DescribeRtcRobotInstanceResponseBodyConfig;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20B3A1B6-4BD2-5DE6-BCBC-098C9B4F4E91
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * - `Executing`: The instance is running.
   * 
   * - `Finished`: The instance has stopped.
   * 
   * @example
   * Executing
   */
  status?: string;
  /**
   * @remarks
   * The custom user data.
   * 
   * @example
   * {}
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the AI agent in the channel.
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
      requestId: 'RequestId',
      status: 'Status',
      userData: 'UserData',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      channelId: 'string',
      config: DescribeRtcRobotInstanceResponseBodyConfig,
      requestId: 'string',
      status: 'string',
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

