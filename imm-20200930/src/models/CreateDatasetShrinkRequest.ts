// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of bindings per dataset. The range is 1~10, with a default value of 10.
   * 
   * @example
   * 10
   */
  datasetMaxBindCount?: number;
  /**
   * @remarks
   * The maximum number of metadata entities in each dataset. The default value is 10000000000.
   * 
   * @example
   * 10000000000
   */
  datasetMaxEntityCount?: number;
  /**
   * @remarks
   * The maximum number of files in each dataset. The range is 1~100000000, with a default value of 100000000.
   * 
   * @example
   * 100000000
   */
  datasetMaxFileCount?: number;
  /**
   * @remarks
   * The maximum number of metadata relationships in each dataset. The default value is 100000000000.
   * 
   * @example
   * 100000000000
   */
  datasetMaxRelationCount?: number;
  /**
   * @remarks
   * The maximum total size of files in each dataset. Once the limit is exceeded, no more indexes can be added. The default value is 90000000000000000, in bytes.
   * 
   * @example
   * 90000000000000000
   */
  datasetMaxTotalFileSize?: number;
  /**
   * @remarks
   * The name of the dataset, which must be unique under the same Project. Naming rules are as follows:
   * - Length should be 1~128 characters.
   * - Can only contain English letters, numbers, hyphens (-), and underscores (_).
   * - Must start with an English letter or underscore (_).
   * 
   * This parameter is required.
   * 
   * @example
   * dataset001
   */
  datasetName?: string;
  /**
   * @remarks
   * Description of the dataset. The length should be 1~256 English or Chinese characters, with a default value of empty.
   * 
   * @example
   * immtest
   */
  description?: string;
  /**
   * @remarks
   * The name of the project. For more information on how to obtain it, see [Create Project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * Workflow template ID. For more information, see [Workflow Templates and Operators](https://help.aliyun.com/document_detail/466304.html). The default value is empty.
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

