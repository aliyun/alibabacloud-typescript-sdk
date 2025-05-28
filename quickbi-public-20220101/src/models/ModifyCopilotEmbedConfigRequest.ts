// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCopilotEmbedConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Agent nickname.
   * 
   * @example
   * smartq
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
   * Map<String,Object> data=new HashMap<>();
   *         data.put("allTheme",true);
   *         //data.put("allCube",true);
   *         //data.put("themes",Lists.newArrayList("1111","22222"));
   *         //data.put("llmCubes",Lists.newArrayList("33333","44444"));
   *         request.setDataRange(JSON.toJSONString(data));
   */
  dataRange?: string;
  /**
   * @remarks
   * Module name.
   * 
   * @example
   * smartq
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

