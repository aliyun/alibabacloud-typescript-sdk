// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of bindings for the dataset. Valid values: 1 to 10. Default value: 10.
   * 
   * @example
   * 10
   */
  datasetMaxBindCount?: number;
  /**
   * @remarks
   * The maximum number of metadata entities in the dataset. Default value: 10000000000.
   * 
   * @example
   * 10000000000
   */
  datasetMaxEntityCount?: number;
  /**
   * @remarks
   * The maximum number of files in the dataset. Valid values: 1 to 100000000. Default value: 100000000.
   * 
   * @example
   * 100000000
   */
  datasetMaxFileCount?: number;
  /**
   * @remarks
   * The maximum number of metadata relationships in the dataset. Default value: 100000000000.
   * 
   * @example
   * 100000000000
   */
  datasetMaxRelationCount?: number;
  /**
   * @remarks
   * The maximum total file size for the dataset. If the total file size of the dataset exceeds this limit, indexes can no longer be added. Default value: 90000000000000000. Unit: bytes.
   * 
   * @example
   * 90000000000000000
   */
  datasetMaxTotalFileSize?: number;
  /**
   * @remarks
   * The name of the dataset. The dataset name must be unique in the same project. The name must meet the following requirements:
   * 
   * *   The name must be 1 to 128 characters in length.
   * *   The name can contain only letters, digits, hyphens (-), and underscores (_).
   * *   The name must start with a letter or underscore (_).
   * 
   * This parameter is required.
   * 
   * @example
   * dataset001
   */
  datasetName?: string;
  /**
   * @remarks
   * The description of the dataset. The description must be 1 to 256 characters in length. You can leave this parameter empty.
   * 
   * @example
   * immtest
   */
  description?: string;
  /**
   * @remarks
   * The name of the project.[](~~478153~~)
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The ID of the workflow template. For more information, see [Workflow templates and operators](https://help.aliyun.com/document_detail/466304.html).
   * 
   * @example
   * Official:AllFunction
   */
  templateId?: string;
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

