// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TagCloudResourcesRequestTags } from "./TagCloudResourcesRequestTags";


export class TagCloudResourcesRequest extends $dara.Model {
  resourceIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AppInstanceGroupId
   */
  resourceType?: string;
  /**
   * @remarks
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

