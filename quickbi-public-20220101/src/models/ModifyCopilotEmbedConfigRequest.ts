// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCopilotEmbedConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Agent nickname.
   * 
   * @example
   * 小Q
   */
  agentName?: string;
  /**
   * @remarks
   * Embedding ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccd3428c-dd2xxxxxxxxxxxxdffee
   */
  copilotId?: string;
  /**
   * @remarks
   * Data range.
   * >Notice: The parameter type is jsonString, and only one switch between analysis themes and query resources can be effective. When the all-select switch is true, it takes precedence. It is recommended to pass only one parameter, with other notes
   * 
   * @example
   * 如果客户要授权所有分析主题，则 {allTheme: true}
   * 如果客户要授权所有问数资源，则 {allCube: true}
   * 如果客户要授权部分问数资源，则 {llmCubes: [12314,12345]}
   * 如果客户要授权部分分析主题，则 {themes: [12314,12345]}
   */
  dataRange?: string;
  /**
   * @remarks
   * Module name.
   * 
   * @example
   * 小Q
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      copilotId: 'CopilotId',
      dataRange: 'DataRange',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      copilotId: 'string',
      dataRange: 'string',
      moduleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

