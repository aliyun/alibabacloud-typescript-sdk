// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of bindings per dataset. Valid values: 1 to 10. Default value: 10.
   * 
   * @example
   * 10
   */
  datasetMaxBindCount?: number;
  /**
   * @remarks
   * The maximum number of metadata entities per dataset. Default value: 10000000000.
   * 
   * @example
   * 10000000000
   */
  datasetMaxEntityCount?: number;
  /**
   * @remarks
   * The maximum number of files per dataset. Valid values: 1 to 100000000. Default value: 100000000.
   * 
   * @example
   * 100000000
   */
  datasetMaxFileCount?: number;
  /**
   * @remarks
   * The maximum number of metadata relationships per dataset. Default value: 100000000000.
   * 
   * @example
   * 100000000000
   */
  datasetMaxRelationCount?: number;
  /**
   * @remarks
   * The maximum total file size per dataset, in bytes. After this limit is exceeded, no more indexes can be added. Default value: 90000000000000000.
   * 
   * @example
   * 90000000000000000
   */
  datasetMaxTotalFileSize?: number;
  /**
   * @remarks
   * The dataset name. The name must be unique within the same project. The following naming rules apply:
   * - The name must be 1 to 128 characters in length.
   * - The name can contain only letters, digits, hyphens (-), and underscores (_).
   * - The name must start with a letter or an underscore (_).
   * 
   * This parameter is required.
   * 
   * @example
   * dataset001
   */
  datasetName?: string;
  /**
   * @remarks
   * The description of the dataset. The description can be 1 to 256 characters in length. Default value: empty.
   * 
   * @example
   * immtest
   */
  description?: string;
  /**
   * @remarks
   * The project name. For information about how to obtain the project name, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The workflow template ID. For more information, see [Workflow templates and operators](https://help.aliyun.com/document_detail/466304.html). Default value: empty.
   * 
   * @example
   * Official:ImageManagement
   */
  templateId?: string;
  /**
   * @remarks
   * Invalid parameter.
   * 
   * @deprecated
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

