// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatasetJobConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration content. Configuration format for MultimodalIntelligentTag:
   * 
   * { "apiKey":"sk-xxxxxxxxxxxxxxxxxxxxx" }
   * 
   * MultimodalSemanticIndex
   * 
   * { "defaultModelId": "xxx" "defaultModelVersion":"1.0.0" }
   * 
   * @example
   * { "apiKey":"sk-xxxxxxxxxxxxxxxxxxxxx" }
   */
  config?: string;
  /**
   * @remarks
   * The configuration type. Valid values:
   * 
   * *   MultimodalIntelligentTag
   * *   MultimodalSemanticIndex
   * 
   * @example
   * MultimodalIntelligentTag
   */
  configType?: string;
  /**
   * @remarks
   * The time when the configuration is created.
   * 
   * @example
   * 2024-10-16T01:44:10Z
   */
  createTime?: string;
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * d-lfd60v0p****ujtsdx
   */
  datasetId?: string;
  /**
   * @remarks
   * The time when the configuration is modified.
   * 
   * @example
   * 2024-12-26T02:17:18Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D5BFFEE3-6025-443F-8A03-02D619B5C4B9
   */
  requestId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 114243
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      configType: 'ConfigType',
      createTime: 'CreateTime',
      datasetId: 'DatasetId',
      modifyTime: 'ModifyTime',
      requestId: 'RequestId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      configType: 'string',
      createTime: 'string',
      datasetId: 'string',
      modifyTime: 'string',
      requestId: 'string',
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

