// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectRequestTag extends $dara.Model {
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

export class CreateProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of bindings for each dataset. Valid values: 1 to 10. Default value: 10.
   * 
   * @example
   * 10
   */
  datasetMaxBindCount?: number;
  /**
   * @remarks
   * The maximum number of metadata entities in each dataset. Default value: 10000000000.
   * 
   * >  This is a precautionary setting that does not impose practical limitations.
   * 
   * @example
   * 10000000000
   */
  datasetMaxEntityCount?: number;
  /**
   * @remarks
   * The maximum number of files in each dataset. Valid values: 1 to 100000000. Default value: 10000000000.
   * 
   * @example
   * 100000000
   */
  datasetMaxFileCount?: number;
  /**
   * @remarks
   * The maximum number of metadata relationships in each dataset. Default value: 100000000000.
   * 
   * >  This is a precautionary setting that does not impose practical limitations.
   * 
   * @example
   * 100000000000
   */
  datasetMaxRelationCount?: number;
  /**
   * @remarks
   * The maximum size of files in each dataset. If the maximum size is exceeded, no indexes can be added. Unit: bytes. Default value: 90000000000000000.
   * 
   * @example
   * 90000000000000000
   */
  datasetMaxTotalFileSize?: number;
  /**
   * @remarks
   * The description of the project. The description must be 1 to 256 characters in length. You can leave this parameter empty.
   * 
   * @example
   * immtest
   */
  description?: string;
  /**
   * @remarks
   * The maximum number of datasets in the project. Valid values: 1 to 1000000000. Default value: 1000000000.
   * 
   * @example
   * 1000000000
   */
  projectMaxDatasetCount?: number;
  /**
   * @remarks
   * The name of the project. The name must meet the following requirements:
   * 
   * *   The name must be 1 to 128 characters in length
   * *   and can contain only letters, digits, hyphens (-), and underscores (_).
   * *   The name must start with a letter or an underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role. You must attach the RAM role to IMM to allow IMM to access other cloud resources, such as Object Storage Service (OSS). Default value: `AliyunIMMDefaultRole`.
   * 
   * You can also create a custom role in the RAM console and grant the required permissions to the role based on your business requirements. For more information, see [Grant permissions to a RAM user](https://help.aliyun.com/document_detail/477257.html).
   * 
   * @example
   * AliyunIMMDefaultRole
   */
  serviceRole?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateProjectRequestTag[];
  /**
   * @remarks
   * The ID of the workflow template. You can leave this parameter empty. For more information, see [Workflow templates and operators](https://help.aliyun.com/document_detail/466304.html).
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
      datasetMaxBindCount: 'number',
      datasetMaxEntityCount: 'number',
      datasetMaxFileCount: 'number',
      datasetMaxRelationCount: 'number',
      datasetMaxTotalFileSize: 'number',
      description: 'string',
      projectMaxDatasetCount: 'number',
      projectName: 'string',
      serviceRole: 'string',
      tag: { 'type': 'array', 'itemType': CreateProjectRequestTag },
      templateId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

