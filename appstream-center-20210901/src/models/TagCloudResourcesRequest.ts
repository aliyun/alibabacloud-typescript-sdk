// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagCloudResourcesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. This parameter is case-sensitive. The tag key must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Resolution
   */
  key?: string;
  /**
   * @remarks
   * The tag value. This parameter is case-sensitive. The tag value must be 1 to 128 characters in length.
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
   * The list of resource IDs. A maximum of 50 resource IDs are supported. You do not need to specify this parameter when the resource type is tenant ID.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The cloud resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * AppInstanceGroupId
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tags. System tags and custom tags are supported.
   * 
   * - System tag enumeration values:
   *    - `System/Scheduler/GRAYSCALE`: canary release tag
   *    - `System/Scheduler/STOP_NEW_USER_CONNECTION`: tag that prevents new user connections from being established for the delivery group
   * 
   * - Custom tags: A maximum of 20 custom tags can be created.
   * 
   * > Each tag key on the same resource can have only one tag value. If you add a tag key that already exists, the corresponding tag value is updated to the new value.
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

