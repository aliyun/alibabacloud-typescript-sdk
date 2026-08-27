// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The resource type.  
   * For more information about the resource types supported by ROS, see [Resource type index](https://help.aliyun.com/document_detail/127039.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::ROS::WaitConditionHandle
   */
  resourceType?: string;
  /**
   * @remarks
   * The version ID. To query a specific version of the resource type, specify this parameter. Otherwise, the resource type is queried.
   * 
   * > Only modules support versions.
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

