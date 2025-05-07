// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDatasetRequestDatasetConfig } from "./CreateDatasetRequestDatasetConfig";
import { CreateDatasetRequestDocumentHandleConfig } from "./CreateDatasetRequestDocumentHandleConfig";


export class CreateDatasetRequest extends $dara.Model {
  datasetConfig?: CreateDatasetRequestDatasetConfig;
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
  documentHandleConfig?: CreateDatasetRequestDocumentHandleConfig;
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
      datasetConfig: 'DatasetConfig',
      datasetDescription: 'DatasetDescription',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      documentHandleConfig: 'DocumentHandleConfig',
      invokeType: 'InvokeType',
      searchDatasetEnable: 'SearchDatasetEnable',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetConfig: CreateDatasetRequestDatasetConfig,
      datasetDescription: 'string',
      datasetName: 'string',
      datasetType: 'string',
      documentHandleConfig: CreateDatasetRequestDocumentHandleConfig,
      invokeType: 'string',
      searchDatasetEnable: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.datasetConfig && typeof (this.datasetConfig as any).validate === 'function') {
      (this.datasetConfig as any).validate();
    }
    if(this.documentHandleConfig && typeof (this.documentHandleConfig as any).validate === 'function') {
      (this.documentHandleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

