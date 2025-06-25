// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TagCloudResourcesResponseBodyFailedResourcesTags } from "./TagCloudResourcesResponseBodyFailedResourcesTags";


export class TagCloudResourcesResponseBodyFailedResources extends $dara.Model {
  /**
   * @example
   * TAG_KEY_DUPLICATED
   */
  code?: string;
  /**
   * @example
   * Duplicate tag keys exist.
   */
  message?: string;
  /**
   * @example
   * aig-001
   */
  resourceId?: string;
  /**
   * @example
   * AppInstanceGroupId
   */
  resourceType?: string;
  tags?: TagCloudResourcesResponseBodyFailedResourcesTags[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      resourceId: 'string',
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': TagCloudResourcesResponseBodyFailedResourcesTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

