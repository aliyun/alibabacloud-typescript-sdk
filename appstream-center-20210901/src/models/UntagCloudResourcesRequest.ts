// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagCloudResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of resource IDs. A maximum of 50 resource IDs are supported. You do not need to specify this parameter when the resource type is tenant ID.
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
   * The list of tags. System tags and custom tags are supported. You can specify up to 10 tags.
   * 
   * Enumerated values for system tags:
   * - `System/Scheduler/GRAYSCALE`: canary release tag
   * - `System/Scheduler/STOP_NEW_USER_CONNECTION`: tag that prevents newly bound users in a delivery group from establishing connections.
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

