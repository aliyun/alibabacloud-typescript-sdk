// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTagResourcesRequestTag } from "./DescribeTagResourcesRequestTag";


export class DescribeTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the resources. You can specify up to 50 IDs in each request.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Set the value to **DOMAIN**.
   * 
   * This parameter is required.
   * 
   * @example
   * DOMAIN
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags. You can specify up to 20 tags in each request.
   */
  tag?: DescribeTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': DescribeTagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

