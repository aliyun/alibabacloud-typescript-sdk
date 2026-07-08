// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetShrinkRequest extends $dara.Model {
  /**
   * @example
   * private
   */
  accessLevel?: string;
  /**
   * @remarks
   * The dataset search configuration.
   */
  datasetConfigShrink?: string;
  /**
   * @remarks
   * The description of the dataset. This is the display name in the console. Use a human-readable name.
   * 
   * @example
   * 企业知识库
   */
  datasetDescription?: string;
  /**
   * @remarks
   * The name of the dataset. The name must be globally unique.
   * 
   * This parameter is required.
   * 
   * @example
   * businessDataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The type of the dataset. Valid values:
   * 
   * - CustomSemanticSearch: A custom semantic index. This is the default value. Upload documents to build the dataset.
   * 
   * - ThirdSearch: A third-party search source (API). Configure your own search API.
   * 
   * @example
   * CustomSemanticSearch
   */
  datasetType?: string;
  /**
   * @remarks
   * Dataset index configuration.
   */
  documentHandleConfigShrink?: string;
  /**
   * @remarks
   * The invocation method. Currently, only portal is supported, which indicates an invocation from the console.
   * 
   * - If left empty: When DatasetType is ThirdSearch, datasetConfig.SearchSourceConfigs (third-party API definition) is required.
   * 
   * - If set to portal: When DatasetType is ThirdSearch, the system initializes a SearchSourceConfigs (third-party API demo) example by default for your reference.
   * 
   * @example
   * portal
   */
  invokeType?: string;
  /**
   * @remarks
   * The dataset search switch. Valid values:
   * 
   * - 0: Disabled for all.
   * 
   * - 1: Visible only to Miao Search.
   * 
   * - 2: Visible only to Miao Bi.
   * 
   * - 3: Visible to both Miao Search and Miao Bi. This is the default value.
   * 
   * @example
   * 3
   */
  searchDatasetEnable?: number;
  /**
   * @remarks
   * The unique ID of the Alibaba Cloud Model Studio workspace. For more information, see [Obtain a workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'AccessLevel',
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
      accessLevel: 'string',
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

