// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetJobConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration content. Format:
   * 
   * *   MultimodalIntelligentTag
   * 
   * { "apiKey":"sk-xxxxxxxxxxxxxxxxxxxxx" }
   * 
   * *   MultimodalSemanticIndex
   * 
   * { "defaultModelId": "xxx" "defaultModelVersion":"1.0.0" }
   * 
   * This parameter is required.
   * 
   * @example
   * { "apiKey":"sk-xxxxxxxxxxxxxxxxxxxxx" }
   */
  config?: string;
  /**
   * @remarks
   * The configuration type.
   * 
   * Valid values:
   * 
   * *   MultimodalIntelligentTag
   * *   MultimodalSemanticIndex
   * 
   * This parameter is required.
   * 
   * @example
   * MultimodalIntelligentTag
   */
  configType?: string;
  datasetVersion?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 454716
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      configType: 'ConfigType',
      datasetVersion: 'DatasetVersion',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      configType: 'string',
      datasetVersion: 'string',
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

