// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateProjectRequestTag } from "./UpdateProjectRequestTag";


export class UpdateProjectRequest extends $dara.Model {
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
   * 
   * >  This is a precautionary setting that does not impose practical limitations.
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
   * The maximum number of metadata relationships in a dataset.
   * 
   * >  This is a precautionary setting that does not impose practical limitations.
   * 
   * @example
   * 100000000000
   */
  datasetMaxRelationCount?: number;
  /**
   * @remarks
   * The maximum size of files in each dataset. If the maximum size is exceeded, indexes can no longer be added. Unit: bytes.
   * 
   * @example
   * 90000000000000000
   */
  datasetMaxTotalFileSize?: number;
  /**
   * @remarks
   * The description of the project. The description must be 1 to 256 characters in length.
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
   * The name of the project. You can obtain the name of the project from the response of the [CreateProject](https://help.aliyun.com/document_detail/478153.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role. You must grant the RAM role to Intelligent Media Management (IMM) before IMM can access other cloud resources such as Object Storage Service (OSS).
   * 
   * You can also create a custom service role in the RAM console and grant the required permissions to the role based on your business requirements. For more information, see [Create a regular service role](https://help.aliyun.com/document_detail/116800.html) and [Grant permissions to a role](https://help.aliyun.com/document_detail/116147.html).
   * 
   * @example
   * AliyunIMMDefaultRole
   */
  serviceRole?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: UpdateProjectRequestTag[];
  /**
   * @remarks
   * The ID of the workflow template. For more information, see [Workflow templates and operators](https://help.aliyun.com/document_detail/466304.html).
   * 
   * @example
   * AliyunIMMDefaultRole
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
      tag: { 'type': 'array', 'itemType': UpdateProjectRequestTag },
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

