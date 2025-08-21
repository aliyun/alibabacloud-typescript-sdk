// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequest extends $dara.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * 用于手机app的小蜜机器人
   */
  introduction?: string;
  /**
   * @example
   * zh-cn
   */
  languageCode?: string;
  /**
   * @example
   * 小蜜机器人
   */
  name?: string;
  /**
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

