// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTagResourcesRequestTag } from "./ListTagResourcesRequestTag";


export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The token used to start the next query.
   * 
   * @example
   * 1d2db86sca4384811e0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * Valid values of N: `[1,50]`.
   * 
   * @example
   * 285bb759342649a1b70c2093a772e087
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource.
   * 
   * Currently, tags are supported for API groups, plug-ins, and apps. Operations performed on APIs are based on the tags of API groups.
   * 
   * *   **apiGroup**
   * *   **plugin**
   * *   **app**
   * *   **api**
   * 
   * This parameter is required.
   * 
   * @example
   * apiGroup
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag of objects that match the lifecycle rule. You can specify multiple tags.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
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

