// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::ROS::WaitConditionHandle
   */
  resourceType?: string;
  /**
   * @remarks
   * The version ID. If you want to query a specific version of the resource type, you must specify this parameter. If you do not specify this parameter, only the resource type is queried.
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

