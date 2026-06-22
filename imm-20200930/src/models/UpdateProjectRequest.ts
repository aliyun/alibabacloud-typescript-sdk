// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetConfig } from "./DatasetConfig";


export class UpdateProjectRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectRequest extends $dara.Model {
  datasetConfig?: DatasetConfig;
  /**
   * @remarks
   * The maximum number of bindings for each dataset. Valid values: 1 to 10.
   * 
   * @example
   * 10
   */
  datasetMaxBindCount?: number;
  /**
   * @remarks
   * The maximum number of metadata entities in each dataset.
   * >This is a reserved parameter and is not enforced during use.
   * 
   * @example
   * 10000000000
   */
  datasetMaxEntityCount?: number;
  /**
   * @remarks
   * The maximum number of files in each dataset. Valid values: 1 to 100000000.
   * 
   * @example
   * 100000000
   */
  datasetMaxFileCount?: number;
  /**
   * @remarks
   * The maximum number of metadata relationships in each dataset.
   * >This is a reserved parameter and is not enforced during use.
   * 
   * @example
   * 100000000000
   */
  datasetMaxRelationCount?: number;
  /**
   * @remarks
   * The maximum total file size in each dataset. After the limit is exceeded, no more indexes can be added. Unit: bytes.
   * 
   * @example
   * 90000000000000000
   */
  datasetMaxTotalFileSize?: number;
  /**
   * @remarks
   * The project description. The description must be 1 to 256 characters in length.
   * 
   * @example
   * immtest
   */
  description?: string;
  /**
   * @remarks
   * The maximum number of datasets in the project. Valid values: 1 to 1000000000.
   * 
   * @example
   * 1000000000
   */
  projectMaxDatasetCount?: number;
  /**
   * @remarks
   * The project name. For information about how to obtain the project name, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The service role that grants Intelligent Media Management (IMM) permissions to access other cloud resources such as Object Storage Service (OSS).
   * 
   * To customize a service role, create a regular service role in the Resource Access Management (RAM) console and grant permissions to the role. For more information, see [Create a regular service role](https://help.aliyun.com/document_detail/116800.html) and [Grant permissions to a role](https://help.aliyun.com/document_detail/116147.html).
   * 
   * @example
   * AliyunIMMDefaultRole
   */
  serviceRole?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: UpdateProjectRequestTag[];
  /**
   * @remarks
   * The workflow template ID. For more information, see [Workflow templates and operators](https://help.aliyun.com/document_detail/466304.html).
   * 
   * @example
   * Official:ImageManagement
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetConfig: 'DatasetConfig',
      datasetMaxBindCount: 'DatasetMaxBindCount',
      datasetMaxEntityCount: 'DatasetMaxEntityCount',
      datasetMaxFileCount: 'DatasetMaxFileCount',
      datasetMaxRelationCount: 'DatasetMaxRelationCount',
      datasetMaxTotalFileSize: 'DatasetMaxTotalFileSize',
      description: 'Description',
      projectMaxDatasetCount: 'ProjectMaxDatasetCount',
      projectName: 'ProjectName',
      serviceRole: 'ServiceRole',
      tag: 'Tag',
      templateId: 'TemplateId',
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
      description: 'string',
      projectMaxDatasetCount: 'number',
      projectName: 'string',
      serviceRole: 'string',
      tag: { 'type': 'array', 'itemType': UpdateProjectRequestTag },
      templateId: 'string',
    };
  }

  validate() {
    if(this.datasetConfig && typeof (this.datasetConfig as any).validate === 'function') {
      (this.datasetConfig as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

