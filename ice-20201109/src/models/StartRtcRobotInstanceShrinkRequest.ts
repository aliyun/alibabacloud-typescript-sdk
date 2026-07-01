// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRtcRobotInstanceShrinkRequest extends $dara.Model {
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
  configShrink?: string;
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
      configShrink: 'Config',
      robotId: 'RobotId',
      userData: 'UserData',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      channelId: 'string',
      configShrink: 'string',
      robotId: 'string',
      userData: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

