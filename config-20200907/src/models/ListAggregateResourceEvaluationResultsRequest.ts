// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateResourceEvaluationResultsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of an account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-7f00626622af0041****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The compliance evaluation result. Valid values:
   * 
   * - COMPLIANT: The resource is compliant.
   * 
   * - NON_COMPLIANT: The resource is non-compliant.
   * 
   * - NOT_APPLICABLE: The rule does not apply to the resource.
   * 
   * - INSUFFICIENT_DATA: No data is available for the resource.
   * 
   * - IGNORED: The evaluation result is ignored.
   * 
   * @example
   * NON_COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If the response is truncated, you can use this token to initiate another request to retrieve the remaining records.
   * 
   * @example
   * IWBjqMYSy0is7zSMGu16****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region where the resource resides. For example, `global` indicates Global and `cn-hangzhou` indicates China (Hangzhou).
   * 
   * For more information about how to obtain the region ID of a resource, see [ListAggregateDiscoveredResources](https://help.aliyun.com/document_detail/265983.html).
   * 
   * @example
   * global
   */
  region?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * For more information about how to obtain the resource ID, see [ListAggregateDiscoveredResources](https://help.aliyun.com/document_detail/265983.html).
   * 
   * @example
   * 23642660635396****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * For more information about how to obtain the resource type, see [ListAggregateDiscoveredResources](https://help.aliyun.com/document_detail/265983.html).
   * 
   * @example
   * ACS::RAM::User
   */
  resourceType?: string;
  /**
   * @remarks
   * The risk level of the compliance package. Valid values:
   * 
   * - 1: high
   * 
   * - 2: medium
   * 
   * - 3: low
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The sorting method. By default, this parameter is not specified. The supported value is `LastNonCompliantRecordTimestamp-Asc`. This value sorts resources based on the time when they first became non-compliant, in ascending order. You must set the `ComplianceType` parameter to `NON_COMPLIANT`.
   * 
   * @example
   * LastNonCompliantRecordTimestamp-Asc
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      complianceType: 'ComplianceType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      region: 'Region',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      riskLevel: 'RiskLevel',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      complianceType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      region: 'string',
      resourceId: 'string',
      resourceType: 'string',
      riskLevel: 'number',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

