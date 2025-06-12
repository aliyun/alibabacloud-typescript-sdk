// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TagResourcesRequestTag } from "./TagResourcesRequestTag";


export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The names of the resources. You can specify up to 50 resource names.
   */
  resourceNames?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * Enumerated values:
   * 
   * *   role
   * *   policy
   * 
   * @example
   * role
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags. You can specify up to 20 tags.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceNames: 'ResourceNames',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceNames: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceNames)) {
      $dara.Model.validateArray(this.resourceNames);
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

