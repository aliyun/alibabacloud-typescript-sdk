// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TagResourcesRequestTag } from "./TagResourcesRequestTag";


export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * 285bb759342649a1b70c2093a772e087
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Tags are bound to API groups, plug-ins, and applications. You can use tags to manage cloud resources by group. Valid values:
   * 
   * *   **apiGroup**
   * *   **plugin**
   * *   **app**
   * 
   * This parameter is required.
   * 
   * @example
   * apiGroup
   */
  resourceType?: string;
  securityToken?: string;
  /**
   * @remarks
   * The tag of objects that match the lifecycle rule. You can specify multiple tags.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021022811
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
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

