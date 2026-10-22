// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace key. If this parameter is not specified, the default workspace is accessed. Obtain the key value from the business management page of the Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The description of the chatbot. The description can be up to 50 characters in length.
   * 
   * @example
   * A sample chatbot for the mobile app
   */
  introduction?: string;
  /**
   * @remarks
   * The language of the chatbot service, such as zh-cn or en-us. Default value: the default language of the workspace. Valid values: the languages supported by the workspace.
   * 
   * @example
   * zh-cn
   */
  languageCode?: string;
  /**
   * @remarks
   * The name of the chatbot. The name can be up to 50 characters in length.
   * 
   * @example
   * SampleChatbot
   */
  name?: string;
  /**
   * @remarks
   * The type of the chatbot. Default value: scenario_im.
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

