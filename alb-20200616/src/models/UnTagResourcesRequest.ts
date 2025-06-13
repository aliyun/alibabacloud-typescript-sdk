// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UnTagResourcesRequestTag } from "./UnTagResourcesRequestTag";


export class UnTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the specified resource. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The IDs of the resources from which you want to remove tags.
   * 
   * This parameter is required.
   * 
   * @example
   * acl-123
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   **acl**: an access control list (ACL)
   * *   **loadbalancer**: an Application Load Balancer (ALB) instance
   * *   **securitypolicy**: a security policy
   * *   **servergroup**: a server group
   * 
   * This parameter is required.
   * 
   * @example
   * loadbalancer
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags that you want to remove.
   * 
   * @example
   * test
   */
  tag?: UnTagResourcesRequestTag[];
  /**
   * @remarks
   * The keys of the tags that you want to remove.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': UnTagResourcesRequestTag },
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

