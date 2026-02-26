// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetConfig } from "./DatasetConfig";
import { WorkflowParameter } from "./WorkflowParameter";


export class Dataset extends $dara.Model {
  /**
   * @remarks
   * The current number of OSS buckets that are bound to the dataset.
   * 
   * @example
   * 2
   */
  bindCount?: number;
  /**
   * @remarks
   * The timestamp when the dataset was created. The timestamp must be in the RFC3339Nano format.
   * 
   * @example
   * 2021-06-29T14:50:13.011643661+08:00
   */
  createTime?: string;
  datasetConfig?: DatasetConfig;
  /**
   * @remarks
   * The maximum number of bindings for the dataset.
   * 
   * @example
   * 10
   */
  datasetMaxBindCount?: number;
  /**
   * @remarks
   * The maximum number of metadata entities for the dataset.
   * 
   * @example
   * 10000000000
   */
  datasetMaxEntityCount?: number;
  /**
   * @remarks
   * The maximum number of files for the dataset.
   * 
   * @example
   * 100000000
   */
  datasetMaxFileCount?: number;
  /**
   * @remarks
   * The maximum number of metadata relationships for the dataset.
   * 
   * @example
   * 100000000000
   */
  datasetMaxRelationCount?: number;
  /**
   * @remarks
   * The maximum total size of files in the dataset. Unit: bytes.
   * 
   * @example
   * 90000000000000000
   */
  datasetMaxTotalFileSize?: number;
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * dataset001
   */
  datasetName?: string;
  /**
   * @remarks
   * The dataset description.
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
   * The name of the project.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The ID of the workflow template.
   * 
   * @example
   * DefaultId
   */
  templateId?: string;
  /**
   * @remarks
   * The total size of files in the dataset. Unit: bytes.
   * 
   * @example
   * 100000
   */
  totalFileSize?: number;
  /**
   * @remarks
   * The timestamp when the dataset was last modified. The timestamp must be in the RFC3339Nano format.
   * 
   * >  If a dataset has never been modified after it was created, the timestamp when the dataset was last modified is the same as the timestamp when the dataset was created.
   * 
   * @example
   * 2021-06-29T14:50:13.011643661+08:00
   */
  updateTime?: string;
  /**
   * @remarks
   * 自定义参数
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

