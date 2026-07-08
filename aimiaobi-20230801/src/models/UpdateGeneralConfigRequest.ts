// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGeneralConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the configuration item. The following configurations are supported:
   * 
   * - Text search threshold for data sources (double): \\`searchGenerate.searchTextMinScore\\`
   * 
   * - Image search threshold for data sources (double): \\`searchGenerate.searchImageMinScore\\`
   * 
   * - Video search threshold for data sources (double): \\`searchGenerate.searchVideoMinScore\\`
   * 
   * - Audio search threshold for data sources (double): \\`searchGenerate.searchAudioMinScore\\`
   * 
   * - Plain text prompt template for answer summarization in general Q\\&A search (string): \\`searchGenerate.sumQaAgentPrompt\\`
   * 
   * - Text and image prompt template for answer summarization in general Q\\&A search (string): \\`searchGenerate.sumQaAgentVlPrompt\\`
   * 
   * - Plain text prompt template for answer summarization in enhanced Q\\&A search (string): \\`searchGenerate.sumQaEnhanceAgentPrompt\\`
   * 
   * - Text and image prompt template for answer summarization in enhanced Q\\&A search (string): \\`searchGenerate.sumQaEnhanceAgentVlPrompt\\`
   * 
   * This parameter is required.
   * 
   * @example
   * xx
   */
  configKey?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  configValue?: string;
  /**
   * @remarks
   * The unique identifier of the Model Studio workspace. For more information, see [Get a workspaceId](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx
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

