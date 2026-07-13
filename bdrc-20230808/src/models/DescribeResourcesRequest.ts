// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The data redundancy type.
   * 
   * @example
   * LRS
   */
  dataRedundancyType?: string;
  /**
   * @remarks
   * A filter for rules that failed the scoring.
   * 
   * @example
   * rule-000c***yc9
   */
  failedRuleTemplate?: string;
  /**
   * @remarks
   * The page size. Default: 10. Maximum: 100. Values less than 10 are set to 10, and values greater than 100 are set to 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. The service returns a token if the response is truncated. To retrieve the next page of results, include this token in your next request. If no token is returned, all results have been retrieved.
   * 
   * @example
   * cae**********699
   */
  nextToken?: string;
  /**
   * @remarks
   * The Resource ARN.
   * 
   * @example
   * acs:ecs:cn-hangzhou:123***7890:instance/i-123***7890
   */
  resourceArn?: string;
  /**
   * @remarks
   * The ID of the resource category.
   * 
   * @example
   * rc-000***123
   */
  resourceCategoryId?: string;
  /**
   * @remarks
   * The resource ID. For example, for an instance, this is the instance ID.
   * 
   * @example
   * i-0003***110
   */
  resourceId?: string;
  /**
   * @remarks
   * A list of resource owner IDs. Use this parameter for cross-account scenarios. If you omit this parameter, the service returns data for the current account by default.
   * 
   * @example
   * [123***7890]
   */
  resourceOwnerIds?: number[];
  /**
   * @remarks
   * The resource region ID.
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
  /**
   * @remarks
   * The sort key.
   * 
   * @example
   * protectionScore
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * ASC
   */
  sortOrder?: string;
  /**
   * @remarks
   * The storage class.
   * 
   * @example
   * ARCHIVE
   */
  storageClass?: string;
  static names(): { [key: string]: string } {
    return {
      dataRedundancyType: 'DataRedundancyType',
      failedRuleTemplate: 'FailedRuleTemplate',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceArn: 'ResourceArn',
      resourceCategoryId: 'ResourceCategoryId',
      resourceId: 'ResourceId',
      resourceOwnerIds: 'ResourceOwnerIds',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
      storageClass: 'StorageClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataRedundancyType: 'string',
      failedRuleTemplate: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceArn: 'string',
      resourceCategoryId: 'string',
      resourceId: 'string',
      resourceOwnerIds: { 'type': 'array', 'itemType': 'number' },
      resourceRegionId: 'string',
      resourceType: 'string',
      sortBy: 'string',
      sortOrder: 'string',
      storageClass: 'string',
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

