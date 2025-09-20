// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WorkflowParameter } from "./WorkflowParameter";


export class Dataset extends $dara.Model {
  bindCount?: number;
  createTime?: string;
  datasetMaxBindCount?: number;
  datasetMaxEntityCount?: number;
  datasetMaxFileCount?: number;
  datasetMaxRelationCount?: number;
  datasetMaxTotalFileSize?: number;
  datasetName?: string;
  description?: string;
  fileCount?: number;
  projectName?: string;
  templateId?: string;
  totalFileSize?: number;
  updateTime?: string;
  /**
   * **if can be null:**
   * true
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

