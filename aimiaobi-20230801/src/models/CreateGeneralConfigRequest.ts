// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGeneralConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Unique identifier of the configuration item. Supported keys include the following:
   * 
   * - MiaoSou text search threshold (double): searchGenerate.searchTextMinScore
   * 
   * - MiaoSou image search threshold (double): searchGenerate.searchImageMinScore
   * 
   * - MiaoSou video search threshold (double): searchGenerate.searchVideoMinScore
   * 
   * - MiaoSou audio search threshold (double): searchGenerate.searchAudioMinScore
   * 
   * - MiaoSou Q\\&A search general answer summary prompt template (string): searchGenerate.sumQaAgentPrompt
   * 
   * - MiaoSou Q\\&A search general answer summary prompt template with text and images (string): searchGenerate.sumQaAgentVlPrompt
   * 
   * - MiaoSou Q\\&A search deep answer summary prompt template (string): searchGenerate.sumQaEnhanceAgentPrompt
   * 
   * - MiaoSou Q\\&A search deep answer summary prompt template with text and images (string): searchGenerate.sumQaEnhanceAgentVlPrompt
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  configKey?: string;
  /**
   * @remarks
   * Value of the configuration item
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  configValue?: string;
  /**
   * @remarks
   * Unique identifier of the Model Studio workspace. [Get the workspace ID](https://help.aliyun.com/document_detail/2782167.html)
   * 
   * This parameter is required.
   * 
   * @example
   * llm-
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      configKey: 'ConfigKey',
      configValue: 'ConfigValue',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configKey: 'string',
      configValue: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

