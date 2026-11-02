// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRtcRobotInstanceShrinkRequest extends $dara.Model {
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
  configShrink?: string;
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

