// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDatasetShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of bindings per dataset. The value range is from 1 to 10.
   * 
   * @example
   * 10
   */
  datasetMaxBindCount?: number;
  /**
   * @remarks
   * The maximum number of metadata entities (including data files, file relationships, clustering groups, etc.) per dataset, with a maximum value of 2^63-1.
   * >Reserved parameter, no actual restriction in use.
   * 
   * @example
   * 10000000000
   */
  datasetMaxEntityCount?: number;
  /**
   * @remarks
   * The maximum number of files per dataset. The value range is from 1 to 100000000.
   * 
   * @example
   * 100000000
   */
  datasetMaxFileCount?: number;
  /**
   * @remarks
   * The maximum number of metadata relationships per dataset, with a maximum value of 2^63-1.
   * >Reserved parameter, no actual restriction in use.
   * 
   * @example
   * 100000000000
   */
  datasetMaxRelationCount?: number;
  /**
   * @remarks
   * The maximum total size of files in each dataset. Once the limit is exceeded, no more indexes can be added. The maximum value is 2^63-1, measured in bytes.
   * 
   * @example
   * 90000000000000000
   */
  datasetMaxTotalFileSize?: number;
  /**
   * @remarks
   * Dataset name, for how to obtain it, please refer to [Create Dataset](https://help.aliyun.com/document_detail/478160.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * Description of the dataset.
   * 
   * @example
   * immtest
   */
  description?: string;
  /**
   * @remarks
   * Project name, for how to obtain it, please refer to [Create Project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * Workflow template ID. For more information, please refer to [Workflow Templates and Operators](https://help.aliyun.com/document_detail/466304.html).
   * 
   * @example
   * Official:ImageManagement
   */
  templateId?: string;
  /**
   * @remarks
   * Invalid parameter.
   */
  workflowParametersShrink?: string;
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
      workflowParametersShrink: 'WorkflowParameters',
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
      workflowParametersShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

