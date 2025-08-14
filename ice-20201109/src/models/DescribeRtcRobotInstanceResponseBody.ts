// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRtcRobotInstanceResponseBodyConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  enableVoiceInterrupt?: boolean;
  greeting?: string;
  /**
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
   * @example
   * **********
   */
  authToken?: string;
  /**
   * @example
   * testId
   */
  channelId?: string;
  config?: DescribeRtcRobotInstanceResponseBodyConfig;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 20B3A1B6-4BD2-5DE6-BCBC-098C9B4F4E91
   */
  requestId?: string;
  /**
   * @example
   * Executing
   */
  status?: string;
  /**
   * @example
   * {}
   */
  userData?: string;
  /**
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

