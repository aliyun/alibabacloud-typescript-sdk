// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the agent. If you omit this parameter, the default agent is used. You can find the key on the Business Management page of your Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * A description of the robot. The description can be up to 50 characters long.
   * 
   * @example
   * 用于手机app的小蜜机器人
   */
  introduction?: string;
  /**
   * @remarks
   * The language of the robot, such as `zh-cn` or `en-us`. The language must be supported by the agent. If you omit this parameter, the agent\\"s default language is used.
   * 
   * @example
   * zh-cn
   */
  languageCode?: string;
  /**
   * @remarks
   * The name of the robot. The maximum length is 50 characters.
   * 
   * @example
   * 小蜜机器人
   */
  name?: string;
  /**
   * @remarks
   * The robot type. The default value is `scenario_im`.
   * 
   * @example
   * scenario_im
   */
  robotType?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      introduction: 'Introduction',
      languageCode: 'LanguageCode',
      name: 'Name',
      robotType: 'RobotType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      introduction: 'string',
      languageCode: 'string',
      name: 'string',
      robotType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

