// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceEvaluationResultsRequest extends $dara.Model {
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
   * The maximum number of entries to return for a single request. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * If the response is truncated, pass the `NextToken` value in a subsequent request to retrieve the remaining results.
   * 
   * @example
   * IWBjqMYSy0is7zSMGu16****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region where the resource resides. For example, `global` indicates Global, and `cn-hangzhou` indicates China (Hangzhou).
   * 
   * For more information, see [ListDiscoveredResources](https://help.aliyun.com/document_detail/169620.html).
   * 
   * @example
   * global
   */
  region?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * For more information, see [ListDiscoveredResources](https://help.aliyun.com/document_detail/169620.html).
   * 
   * @example
   * 23642660635396****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * For more information, see [ListDiscoveredResources](https://help.aliyun.com/document_detail/169620.html).
   * 
   * @example
   * ACS::RAM::User
   */
  resourceType?: string;
  /**
   * @remarks
   * The risk level of the rule. Valid values:
   * 
   * - 1: High risk.
   * 
   * - 2: Medium risk.
   * 
   * - 3: Low risk.
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * This parameter is optional. The only supported value is `LastNonCompliantRecordTimestamp-Asc`. This value sorts resources based on when they first became non-compliant, with the earliest appearing first. Use this parameter only when you set the `ComplianceType` parameter to `NON_COMPLIANT`.
   * 
   * @example
   * LastNonCompliantRecordTimestamp-Asc
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
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

