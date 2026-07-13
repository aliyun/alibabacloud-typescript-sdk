// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 50. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. You can obtain this token from the `NextToken` parameter in the previous response.
   * 
   * @example
   * cae**********699
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource category ID.
   * 
   * @example
   * rc-000***123
   */
  resourceCategoryId?: string;
  resourceOwnerIds?: number[];
  /**
   * @remarks
   * The ID of the region where the resource resides.
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceCategoryId: 'ResourceCategoryId',
      resourceOwnerIds: 'ResourceOwnerIds',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceCategoryId: 'string',
      resourceOwnerIds: { 'type': 'array', 'itemType': 'number' },
      resourceRegionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceOwnerIds)) {
      $dara.Model.validateArray(this.resourceOwnerIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

