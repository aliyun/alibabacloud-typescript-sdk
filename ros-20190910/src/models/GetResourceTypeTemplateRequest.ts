// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceTypeTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the resource. Call the [ListResourceTypes](https://help.aliyun.com/document_detail/133957.html) operation to query supported resource types.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::ECS::VPC
   */
  resourceType?: string;
  /**
   * @remarks
   * The version ID. Specify this parameter to query a specific version of the resource type. If you do not specify this parameter, the default version of the resource type is queried.
   * 
   * > This parameter is supported only for modules.
   * 
   * @example
   * v1
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

