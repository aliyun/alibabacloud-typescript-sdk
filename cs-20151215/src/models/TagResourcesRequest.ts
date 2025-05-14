// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Tag } from "./Tag";


export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region in which the resource resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of resource IDs.
   * 
   * This parameter is required.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of resources that you want to label. Set the value to `CLUSTER`.
   * 
   * This parameter is required.
   * 
   * @example
   * CLUSTER
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags that you want to add to the resources in key-value pairs. You can add up to 20 key-value pairs. Note:
   * 
   * *   The values cannot be empty strings. A value must be 1 to 128 characters in length.
   * *   A key or value cannot start with `aliyun` or `acs:`.
   * *   A key or value cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
   */
  tags?: Tag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'region_id',
      resourceIds: 'resource_ids',
      resourceType: 'resource_type',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
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

