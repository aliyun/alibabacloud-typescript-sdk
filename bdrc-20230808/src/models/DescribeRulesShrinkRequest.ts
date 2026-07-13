// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRulesShrinkRequest extends $dara.Model {
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
  resourceOwnerIdsShrink?: string;
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
      resourceOwnerIdsShrink: 'ResourceOwnerIds',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceCategoryId: 'string',
      resourceOwnerIdsShrink: 'string',
      resourceRegionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

