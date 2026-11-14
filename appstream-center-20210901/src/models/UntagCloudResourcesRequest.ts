// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagCloudResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of resource IDs. A maximum of 50 resource IDs are supported. This parameter is not required when the resource type is tenant ID.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * AppInstanceGroupId
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tag keys. Both system tags and custom tags are supported. A maximum of 10 tag keys can be passed.
   * 
   * Valid values for system tags:
   * - `System/Scheduler/GRAYSCALE`: Canary release tag.
   * - `System/Scheduler/STOP_NEW_USER_CONNECTION`: Tag that prevents new users bound to the delivery group from establishing connections.
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

