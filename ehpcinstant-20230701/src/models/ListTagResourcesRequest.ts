// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTagResourcesRequestTag } from "./ListTagResourcesRequestTag";


export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResult?: number;
  /**
   * @example
   * 1d2db86scXXXXXXXXXX
   */
  nextToken?: string;
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Job
   */
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResult: 'MaxResult',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResult: 'number',
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

