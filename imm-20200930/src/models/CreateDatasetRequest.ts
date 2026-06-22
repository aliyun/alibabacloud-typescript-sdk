// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetConfig } from "./DatasetConfig";
import { WorkflowParameter } from "./WorkflowParameter";


export class CreateDatasetRequest extends $dara.Model {
  /**
   * @remarks
   * The dataset configuration.
   */
  datasetConfig?: DatasetConfig;
  /**
   * @remarks
   * The maximum number of bindings for each dataset. Valid values: 1 to 10. The default value is 10.
   * 
   * @example
   * 10
   */
  datasetMaxBindCount?: number;
  /**
   * @remarks
   * The maximum number of metadata entities in each dataset. The default value is 10,000,000,000.
   * 
   * @example
   * 10000000000
   */
  datasetMaxEntityCount?: number;
  /**
   * @remarks
   * The maximum number of files in each dataset. Valid values: 1 to 100,000,000. The default value is 100,000,000.
   * 
   * @example
   * 100000000
   */
  datasetMaxFileCount?: number;
  /**
   * @remarks
   * The maximum number of metadata relationships in each dataset. The default value is 100,000,000,000.
   * 
   * @example
   * 100000000000
   */
  datasetMaxRelationCount?: number;
  /**
   * @remarks
   * The maximum total size of files in each dataset. You cannot add more indexes after exceeding this limit. The default value is 90,000,000,000,000,000 bytes.
   * 
   * @example
   * 90000000000000000
   */
  datasetMaxTotalFileSize?: number;
  /**
   * @remarks
   * The dataset name. It must be unique within the same project. Naming conventions are as follows:
   * 
   * - Length: 1 to 128 characters.
   * 
   * - Only English letters, digits, hyphens (-), and underscores (_) are allowed.
   * 
   * - Must start with an English letter or an underscore (_).
   * 
   * This parameter is required.
   * 
   * @example
   * dataset001
   */
  datasetName?: string;
  /**
   * @remarks
   * The description of the dataset. Length: 1 to 256 English or Chinese characters. The default value is empty.
   * 
   * @example
   * immtest
   */
  description?: string;
  /**
   * @remarks
   * The project name. For more information, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The workflow template ID. For more information, see [Workflow Templates and Operators](https://help.aliyun.com/document_detail/466304.html). The default value is empty.
   * 
   * @example
   * Official:ImageManagement
   */
  templateId?: string;
  /**
   * @remarks
   * Invalid parameter.
   */
  workflowParameters?: WorkflowParameter[];
  static names(): { [key: string]: string } {
    return {
      datasetConfig: 'DatasetConfig',
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
      datasetConfig: DatasetConfig,
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

