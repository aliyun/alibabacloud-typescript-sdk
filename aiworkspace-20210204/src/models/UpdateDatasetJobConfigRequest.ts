// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDatasetJobConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration content. Formats:
   * 
   * *   MultimodalIntelligentTag
   * 
   * { "apiKey":"sk-xxxxxxxxxxxxxxxxxxxxx" }
   * 
   * *   MultimodalSemanticIndex
   * 
   * { "defaultModelId": "xxx" "defaultModelVersion":"1.0.0" }
   * 
   * @example
   * { "apiKey":"sk-xxxxxxxxxxxxxxxxxxxxx" }
   */
  config?: string;
  /**
   * @remarks
   * The configuration type.
   * 
   * *   MultimodalIntelligentTag
   * *   MultimodalSemanticIndex
   * 
   * @example
   * MultimodalSemanticIndex
   */
  configType?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 167497
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      configType: 'ConfigType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      configType: 'string',
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

