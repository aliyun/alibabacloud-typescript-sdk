// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WorkflowParameter } from "./WorkflowParameter";


export class UpdateDatasetRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  datasetMaxBindCount?: number;
  /**
   * @example
   * 10000000000
   */
  datasetMaxEntityCount?: number;
  /**
   * @example
   * 100000000
   */
  datasetMaxFileCount?: number;
  /**
   * @example
   * 100000000000
   */
  datasetMaxRelationCount?: number;
  /**
   * @example
   * 90000000000000000
   */
  datasetMaxTotalFileSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @example
   * immtest
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @example
   * Official:AllFunction
   */
  templateId?: string;
  workflowParameters?: WorkflowParameter[];
  static names(): { [key: string]: string } {
    return {
      datasetMaxBindCount: 'DatasetMaxBindCount',
      datasetMaxEntityCount: 'DatasetMaxEntityCount',
      datasetMaxFileCount: 'DatasetMaxFileCount',
      datasetMaxRelationCount: 'DatasetMaxRelationCount',
      datasetMaxTotalFileSize: 'DatasetMaxTotalFileSize',
      datasetName: 'DatasetName',
      description: 'Description',
      projectName: 'ProjectName',
      templateId: 'TemplateId',
      workflowParameters: 'WorkflowParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetMaxBindCount: 'number',
      datasetMaxEntityCount: 'number',
      datasetMaxFileCount: 'number',
      datasetMaxRelationCount: 'number',
      datasetMaxTotalFileSize: 'number',
      datasetName: 'string',
      description: 'string',
      projectName: 'string',
      templateId: 'string',
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

