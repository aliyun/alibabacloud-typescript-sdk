// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WorkflowParameter } from "./WorkflowParameter";


export class Dataset extends $dara.Model {
  /**
   * @remarks
   * The number of OSS buckets currently bound to the dataset.
   * 
   * @example
   * 2
   */
  bindCount?: number;
  /**
   * @remarks
   * The timestamp when the dataset was created, in RFC3339Nano format.
   * 
   * @example
   * 2021-06-29T14:50:13.011643661+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The maximum number of bindings allowed for each dataset.
   * 
   * @example
   * 10
   */
  datasetMaxBindCount?: number;
  /**
   * @remarks
   * The maximum number of metadata entities allowed in the dataset.
   * 
   * @example
   * 10000000000
   */
  datasetMaxEntityCount?: number;
  /**
   * @remarks
   * The maximum number of files allowed in the dataset.
   * 
   * @example
   * 100000000
   */
  datasetMaxFileCount?: number;
  /**
   * @remarks
   * The maximum number of metadata relationships allowed in the dataset.
   * 
   * @example
   * 100000000000
   */
  datasetMaxRelationCount?: number;
  /**
   * @remarks
   * The maximum total file size allowed in the dataset, in bytes.
   * 
   * @example
   * 90000000000000000
   */
  datasetMaxTotalFileSize?: number;
  /**
   * @remarks
   * The dataset name.
   * 
   * @example
   * dataset001
   */
  datasetName?: string;
  /**
   * @remarks
   * The description of the dataset.
   * 
   * @example
   * 测试数据集
   */
  description?: string;
  /**
   * @remarks
   * The current number of files in the dataset.
   * 
   * @example
   * 10
   */
  fileCount?: number;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The workflow template ID.
   * 
   * @example
   * Official:ImageManagement
   */
  templateId?: string;
  /**
   * @remarks
   * The total file size in the dataset, in bytes.
   * 
   * @example
   * 100000
   */
  totalFileSize?: number;
  /**
   * @remarks
   * The timestamp when the dataset was last modified, in RFC3339Nano format.
   * 
   * >If the dataset has not been updated since it was created, this timestamp is the same as the creation timestamp.
   * 
   * @example
   * 2021-06-29T14:50:13.011643661+08:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The custom parameters.
   * 
   * **if can be null:**
   * true
   * 
   * @deprecated
   */
  workflowParameters?: WorkflowParameter[];
  static names(): { [key: string]: string } {
    return {
      bindCount: 'BindCount',
      createTime: 'CreateTime',
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
    if(Array.isArray(this.workflowParameters)) {
      $dara.Model.validateArray(this.workflowParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

