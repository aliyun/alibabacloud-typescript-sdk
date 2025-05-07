// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetShrinkRequest extends $dara.Model {
  datasetConfigShrink?: string;
  /**
   * @example
   * 企业自定义数据集
   */
  datasetDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * businessDataset
   */
  datasetName?: string;
  /**
   * @example
   * CustomSemanticSearch
   */
  datasetType?: string;
  documentHandleConfigShrink?: string;
  /**
   * @example
   * portal
   */
  invokeType?: string;
  /**
   * @example
   * 3
   */
  searchDatasetEnable?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetConfigShrink: 'DatasetConfig',
      datasetDescription: 'DatasetDescription',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      documentHandleConfigShrink: 'DocumentHandleConfig',
      invokeType: 'InvokeType',
      searchDatasetEnable: 'SearchDatasetEnable',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetConfigShrink: 'string',
      datasetDescription: 'string',
      datasetName: 'string',
      datasetType: 'string',
      documentHandleConfigShrink: 'string',
      invokeType: 'string',
      searchDatasetEnable: 'number',
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

