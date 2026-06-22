// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetConfig } from "./DatasetConfig";
import { WorkflowParameter } from "./WorkflowParameter";


export class Dataset extends $dara.Model {
  /**
   * @remarks
   * Number of OSS buckets currently attached to the dataset.
   * 
   * @example
   * 2
   */
  bindCount?: number;
  /**
   * @remarks
   * Timestamp of dataset creation in RFC3339Nano format.
   * 
   * @example
   * 2021-06-29T14:50:13.011643661+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * Dataset configuration.
   */
  datasetConfig?: DatasetConfig;
  /**
   * @remarks
   * Maximum number of bindings per dataset.
   * 
   * @example
   * 10
   */
  datasetMaxBindCount?: number;
  /**
   * @remarks
   * Maximum number of metadata entities in the dataset.
   * 
   * @example
   * 10000000000
   */
  datasetMaxEntityCount?: number;
  /**
   * @remarks
   * Maximum number of files in the dataset.
   * 
   * @example
   * 100000000
   */
  datasetMaxFileCount?: number;
  /**
   * @remarks
   * Maximum number of metadata relations in the dataset.
   * 
   * @example
   * 100000000000
   */
  datasetMaxRelationCount?: number;
  /**
   * @remarks
   * Maximum total file size in the dataset, in bytes.
   * 
   * @example
   * 90000000000000000
   */
  datasetMaxTotalFileSize?: number;
  /**
   * @remarks
   * Dataset name.
   * 
   * @example
   * dataset001
   */
  datasetName?: string;
  /**
   * @remarks
   * Dataset description.
   * 
   * @example
   * 测试数据集
   */
  description?: string;
  /**
   * @remarks
   * Current number of files in the dataset.
   * 
   * @example
   * 10
   */
  fileCount?: number;
  /**
   * @remarks
   * Project name.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * Workflow template ID.
   * 
   * @example
   * Official:ImageManagement
   */
  templateId?: string;
  /**
   * @remarks
   * Total file size in the dataset, in bytes.
   * 
   * @example
   * 100000
   */
  totalFileSize?: number;
  /**
   * @remarks
   * Timestamp of the last dataset update in RFC3339Nano format.
   * 
   * > If the dataset has never been updated since creation, the update timestamp equals the creation timestamp.
   * 
   * @example
   * 2021-06-29T14:50:13.011643661+08:00
   */
  updateTime?: string;
  /**
   * @remarks
   * Custom parameters.
   * 
   * **if can be null:**
   * true
   */
  workflowParameters?: WorkflowParameter[];
  static names(): { [key: string]: string } {
    return {
      bindCount: 'BindCount',
      createTime: 'CreateTime',
      datasetConfig: 'DatasetConfig',
      datasetMaxBindCount: 'DatasetMaxBindCount',
      datasetMaxEntityCount: 'DatasetMaxEntityCount',
      datasetMaxFileCount: 'DatasetMaxFileCount',
      datasetMaxRelationCount: 'DatasetMaxRelationCount',
      datasetMaxTotalFileSize: 'DatasetMaxTotalFileSize',
      datasetName: 'DatasetName',
      description: 'Description',
      fileCount: 'FileCount',
      projectName: 'ProjectName',
      templateId: 'TemplateId',
      totalFileSize: 'TotalFileSize',
      updateTime: 'UpdateTime',
      workflowParameters: 'WorkflowParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindCount: 'number',
      createTime: 'string',
      datasetConfig: DatasetConfig,
      datasetMaxBindCount: 'number',
      datasetMaxEntityCount: 'number',
      datasetMaxFileCount: 'number',
      datasetMaxRelationCount: 'number',
      datasetMaxTotalFileSize: 'number',
      datasetName: 'string',
      description: 'string',
      fileCount: 'number',
      projectName: 'string',
      templateId: 'string',
      totalFileSize: 'number',
      updateTime: 'string',
      workflowParameters: { 'type': 'array', 'itemType': WorkflowParameter },
    };
  }

  validate() {
    if(this.datasetConfig && typeof (this.datasetConfig as any).validate === 'function') {
      (this.datasetConfig as any).validate();
    }
    if(Array.isArray(this.workflowParameters)) {
      $dara.Model.validateArray(this.workflowParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

