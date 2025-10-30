// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagCloudResourcesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of a tag. The value must be 1 to 128 characters in length and is case-sensitive. The name must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Resolution
   */
  key?: string;
  /**
   * @remarks
   * The value of a tag. The value must be 1 to 128 characters in length and is case-sensitive. The name must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 720p
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

export class TagCloudResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The resource IDs. You can specify up to 50 resource IDs. You do not need to specify this parameter if you set ResourceType to AliUid.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of the cloud resource.
   * 
   * Valid values:
   * 
   * *   CenterImageId: center image ID.
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
   * The tags that you want to remove from the cloud resources. System and custom tags are supported.
   * 
   * *   Valid values for system tags:
   * 
   *     *   `System/Scheduler/GRAYSCALE`: canary tags.
   *     *   `System/Scheduler/STOP_NEW_USER_CONNECTION`: tags used to stop new users bound to the delivery group from establishing a connection.
   * 
   * *   You can create up to 20 custom tags.
   * 
   * > Each tag key on a resource can have only one tag value. If you create a tag that has the same key as an existing tag, the value of the existing tag is overwritten.
   * 
   * This parameter is required.
   */
  tags?: TagCloudResourcesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': TagCloudResourcesRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

