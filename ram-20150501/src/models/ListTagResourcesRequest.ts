// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTagResourcesRequestTag } from "./ListTagResourcesRequestTag";


export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * GY/oWREsOP1bPHGcHGrXfYX7UG1k9KqWFYThNDPx1UX26PbWOIu2CMqqiMr68H/K
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
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
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      resourceNames: 'ResourceNames',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      pageSize: 'number',
      resourceNames: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
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

