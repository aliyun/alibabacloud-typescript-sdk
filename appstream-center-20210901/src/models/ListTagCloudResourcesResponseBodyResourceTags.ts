// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTagCloudResourcesResponseBodyResourceTagsTags } from "./ListTagCloudResourcesResponseBodyResourceTagsTags";


export class ListTagCloudResourcesResponseBodyResourceTags extends $dara.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * aig-0001
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the cloud resource.
   * 
   * Valid values:
   * 
   * *   AppId: app ID.
   * *   WyId: Alibaba Cloud Workspace user ID.
   * *   AppInstanceGroupId: delivery group ID.
   * *   AliUid: tenant ID.
   * 
   * @example
   * AppInstanceGroupId
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListTagCloudResourcesResponseBodyResourceTagsTags[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': ListTagCloudResourcesResponseBodyResourceTagsTags },
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

