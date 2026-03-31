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
   * The compliance evaluation result of the resource. Valid values:
   * 
   * *   COMPLIANT: The resource is evaluated as compliant.
   * *   NON_COMPLIANT: The resource is evaluated as non-compliant.
   * *   NOT_APPLICABLE: The rule does not apply to the resource.
   * *   INSUFFICIENT_DATA: No data is available.
   * *   IGNORED: The resource is ignored during compliance evaluation.
   * 
   * @example
   * NON_COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The maximum number of entries to return for a single request. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that you want to use to initiate the current request. If the response of the previous request is truncated, you can use this token to initiate another request and obtain the remaining entries.``
   * 
   * @example
   * IWBjqMYSy0is7zSMGu16****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region where one or more resources that you want to query reside. For example, the value `global` indicates global regions and the value `cn-hangzhou` indicates the China (Hangzhou) region.
   * 
   * For more information about how to obtain the ID of a region, see [ListAggregateDiscoveredResources](https://help.aliyun.com/document_detail/265983.html).
   * 
   * @example
   * global
   */
  region?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * For more information about how to obtain the ID of a resource, see [ListAggregateDiscoveredResources](https://help.aliyun.com/document_detail/265983.html).
   * 
   * @example
   * 23642660635396****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * For more information about how to query the type of a resource, see [ListAggregateDiscoveredResources](https://help.aliyun.com/document_detail/265983.html).
   * 
   * @example
   * ACS::RAM::User
   */
  resourceType?: string;
  riskLevel?: number;
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

