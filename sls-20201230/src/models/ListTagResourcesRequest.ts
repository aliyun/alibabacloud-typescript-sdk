// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTagResourcesRequestTags } from "./ListTagResourcesRequestTags";


export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the resources whose tags you want to query. You must specify at least one of resourceId and tags.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   project
   * *   logstore
   * *   dashboard
   * *   machinegroup
   * *   logtailconfig
   * 
   * This parameter is required.
   * 
   * @example
   * project
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags that you want to use to filter resources based on exact match. Each tag is a key-value pair. You must specify at least one of resourceId and tags.
   * 
   * You can enter up to 20 tags.
   */
  tags?: ListTagResourcesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': ListTagResourcesRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
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

