// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTagResourcesRequestTag } from "./ListTagResourcesRequestTag";


export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of tags to return.
   * 
   * @example
   * 20
   */
  maxItem?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * >  This parameter is not required for the first request. If not all results are returned in one query, you can specify the token that is obtained from the previous query as the value of **NextToken**.
   * 
   * @example
   * AAAAAZjtYxxxxxxxx
   */
  nextToken?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the resources reside.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The website ID.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * site
   */
  resourceType?: string;
  securityToken?: string;
  /**
   * @remarks
   * A list of tags. You can enter up to 20 tags.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxItem: 'MaxItem',
      nextToken: 'NextToken',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxItem: 'number',
      nextToken: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      securityToken: 'string',
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

