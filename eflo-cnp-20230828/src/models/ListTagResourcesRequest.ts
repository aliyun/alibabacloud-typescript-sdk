// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTagResourcesRequestTag } from "./ListTagResourcesRequestTag";


export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Next token for the next query
   * 
   * @example
   * F0lqbr2JpLDppro1RahGKViWtqXr3L28cePimcRn
   */
  nextToken?: string;
  /**
   * @remarks
   * ResourceId
   */
  resourceId?: string[];
  /**
   * @remarks
   * Resource type
   * 
   * This parameter is required.
   * 
   * @example
   * ExperimentPlan
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tags to be queried. The value range for N is 1~20.
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

