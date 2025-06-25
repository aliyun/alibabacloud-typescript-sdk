// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagCloudResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The resource IDs. You can specify up to 50 resource IDs. You do not need to specify this parameter if you set ResourceType to AliUid.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of the resource from which you want to remove tags.
   * 
   * Valid values:
   * 
   * *   AppId: app ID.
   * *   WyId: Alibaba Cloud Workspace user ID.
   * *   AppInstanceGroupId: delivery group ID.
   * *   AliUid: tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * AppInstanceGroupId
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags that you want to remove from the cloud resources. System and custom tags are supported. You can specify up to 10 tags.
   * 
   * Valid values for system tags:
   * 
   * *   `System/Scheduler/GRAYSCALE`: canary tags.
   * *   `System/Scheduler/STOP_NEW_USER_CONNECTION`: tags used to stop new users bound to the delivery group from establishing a connection.
   * 
   * This parameter is required.
   */
  tagKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    if(Array.isArray(this.tagKeys)) {
      $dara.Model.validateArray(this.tagKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

