// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectShrinkRequest extends $dara.Model {
  datasetConfigShrink?: string;
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
   * >This parameter is reserved for future use and is not enforced.
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
   * >This parameter is reserved for future use and is not enforced.
   * 
   * @example
   * 100000000000
   */
  datasetMaxRelationCount?: number;
  /**
   * @remarks
   * The maximum total file size in each dataset. After the limit is exceeded, no more indexes can be added. Unit: bytes. Default value: 90000000000000000.
   * 
   * @example
   * 90000000000000000
   */
  datasetMaxTotalFileSize?: number;
  /**
   * @remarks
   * The project description. The description can be 1 to 256 characters in length. Default value: empty.
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
   * The project name. The naming rules are as follows:
   * 
   * - The name must be 1 to 128 characters in length.
   * 
   * - The name can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * - The name must start with a letter or an underscore (_).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The service role that grants IMM permissions to access other Alibaba Cloud resources such as Object Storage Service (OSS). Default value: `AliyunIMMDefaultRole`.
   * 
   * To customize a service role, create a regular service role in the Resource Access Management (RAM) console and grant permissions to the role. For more information, see [Grant permissions to a role](https://help.aliyun.com/document_detail/477258.html).
   * 
   * @example
   * AliyunIMMDefaultRole
   */
  serviceRole?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tagShrink?: string;
  /**
   * @remarks
   * The workflow template ID. Default value: empty. For more information, see [Workflow templates and operators](https://help.aliyun.com/document_detail/466304.html).
   * 
   * @example
   * Official:ImageManagement
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetConfigShrink: 'DatasetConfig',
      datasetMaxBindCount: 'DatasetMaxBindCount',
      datasetMaxEntityCount: 'DatasetMaxEntityCount',
      datasetMaxFileCount: 'DatasetMaxFileCount',
      datasetMaxRelationCount: 'DatasetMaxRelationCount',
      datasetMaxTotalFileSize: 'DatasetMaxTotalFileSize',
      description: 'Description',
      projectMaxDatasetCount: 'ProjectMaxDatasetCount',
      projectName: 'ProjectName',
      serviceRole: 'ServiceRole',
      tagShrink: 'Tag',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetConfigShrink: 'string',
      datasetMaxBindCount: 'number',
      datasetMaxEntityCount: 'number',
      datasetMaxFileCount: 'number',
      datasetMaxRelationCount: 'number',
      datasetMaxTotalFileSize: 'number',
      description: 'string',
      projectMaxDatasetCount: 'number',
      projectName: 'string',
      serviceRole: 'string',
      tagShrink: 'string',
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

